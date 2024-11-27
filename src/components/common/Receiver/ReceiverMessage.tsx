import { Dimensions, ImageProps, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomImage from "../../custom/CustomImage/CustomImage";
import { Colors } from "../../../utils/ThemeColors";
import { FontFamily } from "../../../utils/Fonts";

const { width } = Dimensions.get("window");

type ReceiverMessageProps = {
  imageSrc?: ImageProps;
  typing?: boolean;
};

const ReceiverMessage: React.FC<ReceiverMessageProps> = ({
  imageSrc,
  typing,
}) => {
  return (
    <View style={styles.mTop}>
      <View style={styles.mainView}>
        <View style={styles.mainInner}>
          <CustomImage style={styles.imagaStyle} source={imageSrc} />
          <View style={styles.senderView}>
            <Text style={styles.senderName}>Assistant</Text>
            {typing ? (
              <View style={styles.typingView}>
                <View style={styles.typingIndicator} />
                <View style={styles.typingIndicator} />
                <View style={styles.typingIndicator} />
              </View>
            ) : (
              <>
                <View style={styles.messageView}>
                  <Text style={styles.messageText}>
                    I'm doing well, thank you! How can I help you today?
                  </Text>
                </View>
                <Text style={styles.messageTime}>08:15 AM</Text>
              </>
            )}
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
  messageTime: {
    fontFamily: FontFamily.Source_Sans_Regular,
    fontSize: 14,
    paddingTop: 3,
    textAlign: "right",
  },
  typingView: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  typingIndicator: {
    backgroundColor: Colors.light_Blue,
    height: 15,
    width: 15,
    borderRadius: 7.5,
  },
});

export default ReceiverMessage;
