import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "../utils/ThemeColors";

interface ReactionsProps {
  reactions: TReaction[];
}
const Reactions = ({ reactions }: ReactionsProps) => {
  return (
    <View style={styles.reactionRow}>
      {reactions?.map((reaction) => (
        <TouchableOpacity key={reaction.uuid} style={[styles.reactionButton]}>
          <Text style={[styles.reactionText]}>{reaction.value}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Reactions;

const styles = StyleSheet.create({
  reactionRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginRight: 10,
  },
  reactionButton: {
    padding: 4,
    borderRadius: 20,
    backgroundColor: Colors.light_grey,
  },
  selectedReactionButton: {
    backgroundColor: Colors.theme,
  },
  reactionText: {
    fontSize: 16,
  },
});
