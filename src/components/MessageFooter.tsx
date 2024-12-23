import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Reactions from "./Reactions";
import { formatTimestamp } from "../utils/date";

interface MessageFooterProps {
  sentAt: number;
  reactions: TReaction[];
  isEdited?: boolean;
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

export default React.memo(MessageFooter);

const styles = StyleSheet.create({
  messageTime: {
    fontSize: 14,
    paddingBottom: 3,
    marginRight: 5,
  },
  messageFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
  },
  footerContainer: { flexDirection: "row" },
});
