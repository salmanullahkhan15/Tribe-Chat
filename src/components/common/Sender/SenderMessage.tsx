import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "../../../utils/ThemeColors";
import { FontFamily } from "../../../utils/Fonts";
import { formatTimestamp } from "../../../utils/date";

interface SentMessageProps {
  text: string;
  sentAt: number;
}

const reactions = ["👍", "❤️", "😂", "😮", "😢", "👎"];

const SentMessage = ({ text, sentAt }: SentMessageProps) => {
  const [showReactions, setShowReactions] = useState<boolean>(false);
  const [selectedReaction, setSelectedReaction] = useState<string | null>(null);

  const handleReactionPress = (reaction: string) => {
    setSelectedReaction(reaction);
    setShowReactions(!showReactions);
  };

  return (
    <View style={styles.mTop}>
      <TouchableWithoutFeedback onLongPress={() => setShowReactions(true)}>
        <View style={styles.mainView}>
          <View style={styles.innerView}>
            <Text style={styles.senderText}>{text}</Text>
          </View>
          <Text style={styles.senderTimeText}>{formatTimestamp(sentAt)}</Text>
        </View>
      </TouchableWithoutFeedback>

      {showReactions && (
        <View style={styles.reactionRow}>
          {reactions.map((reaction) => (
            <TouchableOpacity
              key={reaction}
              onPress={() => handleReactionPress(reaction)}
              style={[
                styles.reactionButton,
                selectedReaction === reaction && styles.selectedReactionButton,
              ]}
            >
              <Text
                style={[
                  styles.reactionText,
                  selectedReaction === reaction && styles.selectedReactionText,
                ]}
              >
                {reaction}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {selectedReaction && (
        <Text style={styles.selectedReaction}>{selectedReaction}</Text>
      )}
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
  senderTimeText: {
    fontFamily: FontFamily.Source_Sans_Regular,
    fontSize: 14,
    paddingTop: 3,
    textAlign: "right",
  },

  reactionRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 5,
    paddingHorizontal: 20,
  },
  reactionButton: {
    marginHorizontal: 5,
    padding: 8,
    borderRadius: 20,
    backgroundColor: Colors.light_Grey,
  },
  selectedReactionButton: {
    backgroundColor: Colors.theme,
  },
  reactionText: {
    fontSize: 16,
  },
  selectedReactionText: {
    color: Colors.white,
  },
  selectedReaction: {
    fontFamily: FontFamily.Source_Sans_Regular,
    fontSize: 14,
    color: Colors.light_Grey,
    marginTop: 5,
    paddingHorizontal: 20,
  },
});

export default SentMessage;
