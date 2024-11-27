import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontFamily } from "../../utils/Fonts";
import Reactions from "./Reactions";
import { formatTimestamp } from "../../utils/date";

interface MessageFooterProps {
  sentAt: number;
  reactions: TReaction[];
  isEdited: boolean;
}

const MessageFooter = ({ sentAt, reactions, isEdited }: MessageFooterProps) => {
  return (
    <View style={styles.messageFooter}>
      <Reactions reactions={reactions} />
      <View style={styles.footerContainer}>
        {isEdited && <Text style={[styles.messageTime]}>Edited</Text>}
        <Text style={styles.messageTime}>{formatTimestamp(sentAt)}</Text>
      </View>
    </View>
  );
};

export default MessageFooter;

const styles = StyleSheet.create({
  messageTime: {
    fontFamily: FontFamily.Source_Sans_Regular,
    fontSize: 14,
    paddingTop: 3,
    marginRight: 5,
  },
  messageFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
  },
  footerContainer: { flexDirection: "row" },
});
