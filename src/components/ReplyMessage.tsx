import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Attachments from "./Attachments";
import MessageFooter from "./MessageFooter";
import { Colors } from "../utils/ThemeColors";
import chatStore from "../store/chatStore";

type ReplyMessageProps = {
  replyMessage: TMessage;
};

const ReplyMessage = ({ replyMessage }: ReplyMessageProps) => {
  const { participants } = chatStore();
  const autorNameReplyMessage = (uuid: string) =>
    participants.find((p) => p.uuid === uuid)?.name;

  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.autorName}>
        {autorNameReplyMessage(replyMessage.authorUuid)}:
      </Text>
      <Text style={[styles.messageText]}>{replyMessage?.text}</Text>
      {replyMessage?.attachments && (
        <Attachments attachments={replyMessage?.attachments} />
      )}
      {replyMessage?.reactions && replyMessage?.sentAt && (
        <MessageFooter
          reactions={replyMessage?.reactions}
          sentAt={replyMessage?.sentAt}
        />
      )}
    </TouchableOpacity>
  );
};

export default ReplyMessage;

const styles = StyleSheet.create({
  container: {
    borderLeftWidth: 2,
    borderLeftColor: Colors.theme,
    marginBottom: 10,
  },
  messageText: {
    fontSize: 16,
    color: Colors.black,
    fontStyle: "italic",
    paddingHorizontal: 10,
  },
  autorName: {
    color: Colors.theme,
    fontStyle: "italic",
    fontWeight: 600,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});
