import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { isLastItem } from "../utils/helper";
import Attachments from "./Attachments";
import MessageFooter from "./MessageFooter";
import ReplyMessage from "./ReplyMessage";
import { Colors } from "../utils/ThemeColors";

interface MessageProps {
  message: TMessage;
  index: number;
  messagesLength: number;
  isSenderMessage: boolean;
}
const Message = ({
  message,
  index,
  messagesLength,
  isSenderMessage,
}: MessageProps) => {
  return (
    <View key={message.uuid}>
      <View
        style={[
          styles.messageContainer,
          isLastItem(index, messagesLength) && isSenderMessage
            ? styles.lastMessageSent
            : styles.lastMessageReceived,
          isSenderMessage ? styles.messageBgTheme : styles.messageBgWhite,
        ]}
      >
        {message.replyToMessage && (
          <ReplyMessage replyMessage={message.replyToMessage} />
        )}
        <Attachments attachments={message.attachments} />
        <Text
          style={[
            styles.messageText,
            isSenderMessage ? styles.messageTextWhite : styles.messageTextBlack,
          ]}
        >
          {message.text}
        </Text>
      </View>
      <MessageFooter
        isEdited={message.isEdited}
        reactions={message.reactions}
        sentAt={message.sentAt}
      />
    </View>
  );
};

export default React.memo(Message);

const styles = StyleSheet.create({
  messageContainer: {
    padding: 15,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    marginVertical: 2,
  },
  messageBgWhite: {
    backgroundColor: Colors.white_03,
  },
  messageBgTheme: {
    backgroundColor: Colors.theme,
  },
  messageText: {
    fontSize: 16,
  },
  messageTextBlack: {
    color: Colors.black,
  },
  messageTextWhite: {
    color: Colors.white,
  },

  lastMessageSent: {
    borderBottomRightRadius: 0,
  },
  lastMessageReceived: {
    borderBottomLeftRadius: 0,
  },
});
