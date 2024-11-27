import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import CustomImage from "../components/custom/CustomImage/CustomImage";
import {
  Avatar_Image,
  Back_Icon,
  Gallery_Icon,
  Smiley_Icon,
  Upload_Icon,
} from "../utils/Images";
import { Colors } from "../utils/ThemeColors";
import SenderMessage from "../components/common/Sender/SenderMessage";
import ReceiverMessage from "../components/common/Receiver/ReceiverMessage";
import { FontFamily } from "../utils/Fonts";

const { width } = Dimensions.get("window");

const ChatScreen = () => {
  return (
    <LinearGradient
      colors={[Colors.white, Colors.white_01]}
      locations={[0, 1]}
      style={styles.container}
    >
      <View style={styles.headerView}>
        <CustomImage source={Avatar_Image} style={styles.imageStyle} />
        <View style={{ marginLeft: 20 }}>
          <Text style={styles.userText}>Contact Name</Text>
          <View style={styles.rowStyle}>
            <Text style={styles.subjectText}>Subject Here</Text>
            <View style={{ ...styles.rowStyle, marginLeft: 15 }}>
              <View style={styles.circle} />
              <Text
                style={{
                  ...styles.lastSeenText,
                }}
              >
                Last Seen 2
                <Text
                  style={{
                    ...styles.lastSeenText,
                  }}
                >
                  {""} Days ago
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ paddingBottom: 20, paddingHorizontal: 10 }}>
          <SenderMessage />
          <SenderMessage />
          <SenderMessage />
          <SenderMessage />
          <SenderMessage />
          <ReceiverMessage imageSrc={Avatar_Image} />
          <ReceiverMessage imageSrc={Avatar_Image} />
          <ReceiverMessage imageSrc={Avatar_Image} />
          <ReceiverMessage imageSrc={Avatar_Image} />
          <ReceiverMessage imageSrc={Avatar_Image} />
          <ReceiverMessage imageSrc={Avatar_Image} />
        </View>
      </ScrollView>

      <View style={styles.footerView}>
        <View style={styles.rowStyle}>
          <TouchableOpacity>
            <CustomImage source={Smiley_Icon} />
          </TouchableOpacity>
          <TextInput
            multiline={true}
            style={styles.textInputStyle}
            placeholder="Reply..."
            textAlignVertical="top"
          />
        </View>

        <View style={styles.rowStyle}>
          <TouchableOpacity style={{ marginHorizontal: 10 }}>
            <CustomImage source={Gallery_Icon} />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 10 }}>
            <CustomImage source={Upload_Icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sendBtn}>
            <CustomImage source={Back_Icon} />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    width: width * 0.9,
    alignSelf: "center",
  },
  imageStyle: {
    height: 48,
    width: 48,
  },
  userText: {
    fontSize: 14,
    color: Colors.theme,
    fontFamily: FontFamily.Source_Sans_Bold,
  },
  subjectText: {
    fontSize: 12,
    lineHeight: 20,
    fontFamily: FontFamily.Source_Sans_Regular,
  },
  lastSeenText: {
    color: Colors.brown,
    fontSize: 11,
    marginLeft: 5,
  },
  rowStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    backgroundColor: Colors.brown,
    height: 8,
    width: 8,
    borderRadius: 4,
  },
  buttonStyle: {
    backgroundColor: Colors.white_02,
    borderWidth: 1,
    borderColor: Colors.light_Purple,
    borderRadius: 10,
    padding: 10,
  },
  textInputStyle: {
    fontSize: 16,
    color: Colors.RGB_BLACK_60,
    marginLeft: 10,
    width: width * 0.55,
    fontFamily: FontFamily.Source_Sans_Regular,
  },
  sendBtn: {
    backgroundColor: Colors.theme,
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  footerView: {
    backgroundColor: Colors.white,
    elevation: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});

export default ChatScreen;
