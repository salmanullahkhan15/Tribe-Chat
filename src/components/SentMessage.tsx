import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import Message from "./Message";

interface SentMessageProps {
  messages: TMessage[];
}

const SentMessage = ({ messages }: SentMessageProps) => {
  return (
    <View style={styles.mTop}>
      <View style={styles.mainView}>
        {messages?.map((message, index) => (
          <Message
            key={message.uuid}
            message={message}
            index={index}
            messagesLength={messages.length}
            isSenderMessage={true}
          />
        ))}
      </View>
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
});

export default React.memo(SentMessage);
