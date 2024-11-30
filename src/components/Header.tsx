import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar_Image } from "../utils/Images";
import { Colors } from "../utils/ThemeColors";
import ExpoImage from "./ExpoImage";
const { width } = Dimensions.get("window");

const Header = () => {
  return (
    <View style={styles.headerView}>
      <ExpoImage source={Avatar_Image} style={styles.imageStyle} />
      <View style={styles.innerView}>
        <Text style={styles.userText}>Tribe Chat</Text>
        <View style={styles.rowStyle}>
          <Text style={styles.subjectText}>Connect Simply!</Text>
          <View style={[styles.rowStyle, styles.status]}>
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

export default React.memo(Header);

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
  },
  subjectText: {
    fontSize: 12,
    lineHeight: 20,
  },
  lastSeenText: {
    color: Colors.active_green,
    fontSize: 11,
    marginLeft: 5,
  },
  rowStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    backgroundColor: Colors.active_green,
    height: 8,
    width: 8,
    borderRadius: 8,
  },
  innerView: { marginLeft: 20 },
  status: { marginLeft: 15 },
});
