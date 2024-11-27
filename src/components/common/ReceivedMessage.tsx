import { Dimensions, ImageProps, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomImage from "../custom/CustomImage/CustomImage";
import { Colors } from "../../utils/ThemeColors";
import { FontFamily } from "../../utils/Fonts";
import { formatTimestamp } from "../../utils/date";
import Reactions from "./Reactions";
import MessageFooter from "./MessageFooter";

const { width } = Dimensions.get("window");

type ReceivedMessageProps = {
  text: string;
  sentAt: number;
  authorName: string;
  authorImage?: string;
  reactions: TReaction[];
  isEdited: boolean;
};

const ReceivedMessage = ({
  text,
  sentAt,
  authorName,
  authorImage,
  reactions,
  isEdited,
}: ReceivedMessageProps) => {
  return (
    <View style={styles.mTop}>
      <View style={styles.mainView}>
        <View style={styles.mainInner}>
          {authorImage && (
            <CustomImage style={styles.imagaStyle} source={authorImage} />
          )}
          <View style={styles.senderView}>
            <Text style={styles.senderName}>{authorName}</Text>
            <View style={styles.messageView}>
              <Text style={styles.messageText}>{text}</Text>
            </View>
            <MessageFooter
              isEdited={isEdited}
              reactions={reactions}
              sentAt={sentAt}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mTop: {
    marginTop: 20,
  },
  mainView: {
    alignSelf: "flex-start",
  },
  mainInner: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  imagaStyle: {
    height: 48,
    width: 48,
    borderRadius: 24,
  },
  senderView: {
    width: width * 0.78,
    marginLeft: 10,
  },
  senderName: {
    fontFamily: FontFamily.Source_Sans_Bold,
    fontSize: 16,
    color: Colors.black_01,
  },
  messageView: {
    backgroundColor: Colors.white_03,
    padding: 15,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    marginTop: 5,
  },
  messageText: {
    fontFamily: FontFamily.Source_Sans_Regular,
    fontSize: 16,
    color: Colors.black_01,
  },
});

export default ReceivedMessage;
