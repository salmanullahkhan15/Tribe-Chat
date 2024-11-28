import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { Colors } from "../utils/ThemeColors";
import { FontFamily } from "../utils/Fonts";
import MessageFooter from "./MessageFooter";
import { isLastItem } from "../utils/helper";
import Attachments from "./Attachments";

interface SentMessageProps {
  messages: TMessage[];
}

const SentMessage = ({ messages }: SentMessageProps) => {
  return (
    <View style={styles.mTop}>
      <TouchableWithoutFeedback>
        <View style={styles.mainView}>
          {messages?.map((item, index) => (
            <View key={item.uuid}>
              <View
                style={[
                  styles.messageContainer,
                  isLastItem(index, messages.length) &&
                    styles.lastMessageContainer,
                ]}
              >
                <Attachments attachments={item.attachments} />
                <Text style={styles.messageText}>{item.text}</Text>
              </View>
              <MessageFooter
                isEdited={item.isEdited}
                reactions={item.reactions}
                sentAt={item.sentAt}
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
    fontFamily: FontFamily.Source_Sans_Regular,
    fontSize: 16,
    color: Colors.white,
  },
  lastMessageContainer: {
    borderBottomRightRadius: 0,
  },
});

export default React.memo(SentMessage);
