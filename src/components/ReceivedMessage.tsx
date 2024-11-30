import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../utils/ThemeColors";
import ExpoImage from "./ExpoImage";
import Message from "./Message";

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
            <ExpoImage style={styles.imageStyle} source={authorImage} />
          )}
          <View style={styles.messageMain}>
            <Text style={styles.authorName}>{authorName}</Text>
            {messages?.map((message, index) => (
              <Message
                key={message.uuid}
                message={message}
                index={index}
                messagesLength={messages.length}
                isSenderMessage={false}
              />
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
    maxWidth: "90%",
    alignSelf: "flex-start",
  },
  mainInner: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  imageStyle: {
    height: 48,
    width: 48,
    borderRadius: 24,
  },
  messageMain: {
    width: width * 0.78,
    marginLeft: 10,
  },
  authorName: {
    fontSize: 16,
    color: Colors.black_01,
    fontWeight: "600",
  },
});

export default React.memo(ReceivedMessage);
