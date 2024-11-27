import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar_Image } from "../../utils/Images";
import { Colors } from "../../utils/ThemeColors";
import { FontFamily } from "../../utils/Fonts";
import ExpoImage from "./ExpoImage";
const { width } = Dimensions.get("window");

const Header = () => {
  return (
    <View style={styles.headerView}>
      <ExpoImage source={Avatar_Image} style={styles.imageStyle} />
      <View style={{ marginLeft: 20 }}>
        <Text style={styles.userText}>Tripe Chat</Text>
        <View style={styles.rowStyle}>
          <Text style={styles.subjectText}>Connect Simply!</Text>
          <View style={{ ...styles.rowStyle, marginLeft: 15 }}>
            <View style={styles.circle} />
            <Text
              style={{
                ...styles.lastSeenText,
              }}
            >
              Active
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
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
    color: Colors.activeGreen,
    fontSize: 11,
    marginLeft: 5,
  },
  rowStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    backgroundColor: Colors.activeGreen,
    height: 8,
    width: 8,
    borderRadius: 8,
  },
});
