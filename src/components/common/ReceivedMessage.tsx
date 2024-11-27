import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../utils/ThemeColors";
import { FontFamily } from "../../utils/Fonts";
import MessageFooter from "./MessageFooter";
import { calculateResponsiveDimensions, isLastItem } from "../../utils/helper";
import ExpoImage from "./ExpoImage";

const { width } = Dimensions.get("window");

type ReceivedMessageProps = {
  authorName?: string;
  authorImage?: string;
  messages: TMessage[];
};

const ReceivedMessage = ({
  authorName,
  authorImage,
  messages,
}: ReceivedMessageProps) => {
  return (
    <View style={styles.mTop}>
      <View style={styles.mainView}>
        <View style={styles.mainInner}>
          {authorImage && (
            <ExpoImage style={styles.imagaStyle} source={authorImage} />
          )}
          <View style={styles.messageMain}>
            <Text style={styles.senderName}>{authorName}</Text>
            {messages?.map((item, index) => (
              <View key={item.uuid}>
                <View
                  style={[
                    styles.messageContainer,
                    {
                      borderBottomLeftRadius: isLastItem(index, messages.length)
                        ? 0
                        : 15,
                    },
                  ]}
                >
                  {item.attachments.map((attachment) => {
                    const { width, height } = calculateResponsiveDimensions(
                      attachment.width,
                      attachment.height
                    );
                    return (
                      <View
                        key={attachment.uuid}
                        style={[styles.attachmentContainer]}
                      >
                        <ExpoImage
                          style={[
                            styles.attachment,
                            {
                              width,
                              height,
                            },
                          ]}
                          source={attachment.url}
                        />
                      </View>
                    );
                  })}
                  <Text style={styles.messageText}>{item.text}</Text>
                </View>
                <MessageFooter
                  isEdited={item.isEdited}
                  reactions={item.reactions}
                  sentAt={item.sentAt}
                />
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mTop: {
    marginTop: 20,
  },
  mainView: {
    alignSelf: "flex-start",
  },
  mainInner: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  imagaStyle: {
    height: 48,
    width: 48,
    borderRadius: 24,
  },
  messageMain: {
    width: width * 0.78,
    marginLeft: 10,
  },
  senderName: {
    fontFamily: FontFamily.Source_Sans_Bold,
    fontSize: 16,
    color: Colors.black_01,
  },
  messageContainer: {
    backgroundColor: Colors.white_03,
    padding: 15,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    marginTop: 5,
  },
  messageText: {
    fontFamily: FontFamily.Source_Sans_Regular,
    fontSize: 16,
    color: Colors.black_01,
  },
  attachmentContainer: { marginBottom: 10 },
  attachment: { borderRadius: 5 },
});

export default React.memo(ReceivedMessage);
