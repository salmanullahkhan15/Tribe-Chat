import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { Colors } from "../utils/ThemeColors";
import MessageFooter from "./MessageFooter";
import { isLastItem } from "../utils/helper";
import Attachments from "./Attachments";
import ReplyMessage from "./ReplyMessage";

interface SentMessageProps {
  messages: TMessage[];
}

const SentMessage = ({ messages }: SentMessageProps) => {
  return (
    <View style={styles.mTop}>
      <TouchableWithoutFeedback>
        <View style={styles.mainView}>
          {messages?.map((message, index) => (
            <View key={message.uuid}>
              <View
                style={[
                  styles.messageContainer,
                  isLastItem(index, messages.length) &&
                    styles.lastMessageContainer,
                ]}
              >
                {message.replyToMessage && (
                  <ReplyMessage replyMessage={message.replyToMessage} />
                )}
                <Attachments attachments={message.attachments} />
                <Text style={styles.messageText}>{message.text}</Text>
              </View>
              <MessageFooter
                isEdited={message.isEdited}
                reactions={message.reactions}
                sentAt={message.sentAt}
              />
            </View>
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
    fontSize: 16,
    color: Colors.white,
  },
  lastMessageContainer: {
    borderBottomRightRadius: 0,
  },
});

export default React.memo(SentMessage);
