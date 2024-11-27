import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { Colors } from "../../utils/ThemeColors";
import { FontFamily } from "../../utils/Fonts";
import MessageFooter from "./MessageFooter";
import { calculateResponsiveDimensions, isLastItem } from "../../utils/helper";
import CustomImage from "../custom/CustomImage/CustomImage";

interface SentMessageProps {
  messages: TMessageWithParticipants[];
}

const SentMessage = ({ messages }: SentMessageProps) => {
  return (
    <View style={styles.mTop}>
      <TouchableWithoutFeedback>
        <View style={styles.mainView}>
          {messages?.map((item, index) => (
            <>
              <View
                key={item.uuid}
                style={[
                  styles.messageContainer,
                  {
                    borderBottomRightRadius: isLastItem(index, messages.length)
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
                    <View key={item.uuid} style={[styles.attachmentContainer]}>
                      <CustomImage
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
            </>
          ))}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  mTop: {
    marginTop: 20,
  },
  mainView: {
    width: "90%",
    alignSelf: "flex-end",
  },
  messageContainer: {
    backgroundColor: Colors.theme,
    padding: 15,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    marginVertical: 2,
  },
  messageText: {
    fontFamily: FontFamily.Source_Sans_Regular,
    fontSize: 16,
    color: Colors.white,
  },
  attachmentContainer: { marginBottom: 10 },
  attachment: { borderRadius: 5 },
});

export default SentMessage;
