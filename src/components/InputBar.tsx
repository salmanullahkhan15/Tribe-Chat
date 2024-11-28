import {
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Colors } from "../utils/ThemeColors";
import chatStore from "../store/chatStore";

const { width } = Dimensions.get("window");

const InputBar = () => {
  const [newMessage, setNewMessage] = useState<string>("");
  const { fetchMessages, sendMessageToServer } = chatStore();

  const handleSend = useCallback(async () => {
    if (newMessage.trim()) {
      await sendMessageToServer(newMessage.trim());
      setNewMessage("");
      fetchMessages();
    }
  }, [newMessage, sendMessageToServer, fetchMessages]);

  return (
    <View style={styles.footerView}>
      <View style={styles.rowStyle}>
        <TextInput
          value={newMessage}
          onChangeText={setNewMessage}
          multiline
          style={styles.textInputStyle}
          placeholder="Message..."
          textAlignVertical="top"
        />
      </View>

      <View style={styles.rowStyle}>
        <TouchableOpacity style={[styles.sendButtonBase, styles.sendBtnGrey]}>
          <FontAwesome size={24} color={Colors.black} name="paperclip" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.sendButtonBase, styles.sendBtnBlue]}
          onPress={handleSend}
        >
          <FontAwesome size={16} color={Colors.white} name="send" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default React.memo(InputBar);

const styles = StyleSheet.create({
  sendButtonBase: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  sendBtnBlue: {
    backgroundColor: Colors.theme,
  },
  sendBtnGrey: {
    backgroundColor: Colors.light_grey,
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
    marginLeft: 10,
    width: width * 0.55,
  },
});
