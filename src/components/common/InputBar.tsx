import {
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Smiley_Icon } from "../../utils/Images";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { FontFamily } from "../../utils/Fonts";
import ExpoImage from "./ExpoImage";
import { Colors } from "../../utils/ThemeColors";
import chatStore from "../../store/chatStore";

const { width } = Dimensions.get("window");

const InputBar = () => {
  const [newMessage, setNewMessage] = useState<string>("");
  const {
    fetchMessages,
    sendMessageToServer,
  } = chatStore();

  const handleSend = async () => {
    if (newMessage.trim()) {
      await sendMessageToServer(newMessage.trim());
      setNewMessage("");
      fetchMessages();
    }
  };
  return (
    <View style={styles.footerView}>
      <View style={styles.rowStyle}>
        <TouchableOpacity>
          <ExpoImage source={Smiley_Icon} />
        </TouchableOpacity>
        <TextInput
          value={newMessage}
          onChangeText={setNewMessage}
          multiline
          style={styles.textInputStyle}
          placeholder="Reply..."
          textAlignVertical="top"
        />
      </View>

      <View style={styles.rowStyle}>
        <TouchableOpacity style={styles.sendBtnGrey}>
          <FontAwesome size={24} color={Colors.black} name="paperclip" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendBtn} onPress={handleSend}>
          <FontAwesome size={16} color={Colors.white} name="send" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputBar;

const styles = StyleSheet.create({
  sendBtn: {
    backgroundColor: Colors.theme,
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  sendBtnGrey: {
    backgroundColor: Colors.light_Grey,
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
  rowStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInputStyle: {
    fontSize: 16,
    color: Colors.RGB_BLACK_60,
    marginLeft: 10,
    width: width * 0.55,
    fontFamily: FontFamily.Source_Sans_Regular,
  },
});
