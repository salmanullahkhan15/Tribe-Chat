import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { Colors } from "../../utils/ThemeColors";
import { FontFamily } from "../../utils/Fonts";
import MessageFooter from "./MessageFooter";

interface SentMessageProps {
  text: string;
  sentAt: number;
  reactions: TReaction[];
  isEdited: boolean;
}

const SentMessage = ({
  text,
  sentAt,
  reactions,
  isEdited,
}: SentMessageProps) => {
  return (
    <View style={styles.mTop}>
      <TouchableWithoutFeedback>
        <View style={styles.mainView}>
          <View style={styles.innerView}>
            <Text style={styles.messageText}>{text}</Text>
          </View>
          <MessageFooter
            isEdited={isEdited}
            reactions={reactions}
            sentAt={sentAt}
          />
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
  messageText: {
    fontFamily: FontFamily.Source_Sans_Regular,
    fontSize: 16,
    color: Colors.white,
  },
});

export default SentMessage;
