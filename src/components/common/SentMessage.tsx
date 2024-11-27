import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "../../utils/ThemeColors";
import { FontFamily } from "../../utils/Fonts";
import { formatTimestamp } from "../../utils/date";
import Reactions from "./Reactions";

interface SentMessageProps {
  text: string;
  sentAt: number;
  reactions: TReaction[];
}

// const reactions = ["👍", "❤️", "😂", "😮", "😢", "👎"];

const SentMessage = ({ text, sentAt, reactions }: SentMessageProps) => {
  return (
    <View style={styles.mTop}>
      <TouchableWithoutFeedback>
        <View style={styles.mainView}>
          <View style={styles.innerView}>
            <Text style={styles.senderText}>{text}</Text>
          </View>
          <View style={styles.messageFooter}>
            <Reactions reactions={reactions} />
            <Text style={styles.messageTime}>{formatTimestamp(sentAt)}</Text>
          </View>
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
    alignSelf: "flex-end",
  },
  innerView: {
    backgroundColor: Colors.theme,
    padding: 15,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 0,
  },
  senderText: {
    fontFamily: FontFamily.Source_Sans_Regular,
    fontSize: 16,
    color: Colors.white,
  },
  messageTime: {
    fontFamily: FontFamily.Source_Sans_Regular,
    fontSize: 14,
    paddingTop: 3,
  },
  messageFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
  },
});

export default SentMessage;
