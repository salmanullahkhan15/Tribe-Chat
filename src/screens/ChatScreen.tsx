import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef } from "react";
import CustomImage from "../components/custom/CustomImage/CustomImage";
import { Avatar_Image, Smiley_Icon } from "../utils/Images";
import { Colors } from "../utils/ThemeColors";
import { FontFamily } from "../utils/Fonts";
import chatStore from "../store/chatStore";
import { messagesWithParticipant } from "../utils/helper";
import SentMessage from "../components/common/SentMessage";
import ReceivedMessage from "../components/common/ReceivedMessage";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const { width } = Dimensions.get("window");

const ChatScreen = () => {
  const flatListRef = useRef<FlatList>(null);

  const {
    messages,
    participants,
    fetchMessages,
    loadFromStorage,
    fetchParticipants,
  } = chatStore();

  useEffect(() => {
    (async () => {
      await loadFromStorage();
      fetchMessages();
      fetchParticipants();
    })();
  }, []);

  const formatedMessages = messagesWithParticipant(
    messages,
    participants
  ).reverse();

  console.log("formatedMessages", JSON.stringify(formatedMessages[0], null, 3));

  const renderMessage = ({ item }: { item: TMessageWithParticipantsGroup }) => {
    return item.authorUuid == "you" ? (
      <SentMessage messages={item?.messages} />
    ) : (
      <ReceivedMessage
        authorName={item.author?.name}
        authorImage={item.author.avatarUrl}
        messages={item?.messages}
      />
    );
  };

  return (
    <View style={styles.container}>
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
      <View style={styles.flatlistContainer}>
        <FlatList
          ref={flatListRef}
          data={formatedMessages}
          keyExtractor={(item: TMessageWithParticipantsGroup) => item.udid}
          renderItem={renderMessage}
          contentContainerStyle={styles.listContainer}
          style={styles.flatList}
          showsVerticalScrollIndicator={false}
          inverted
        />
      </View>

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
          <TouchableOpacity style={styles.sendBtnGrey}>
            <FontAwesome size={24} color={Colors.black} name="paperclip" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sendBtn}>
            <FontAwesome size={16} color={Colors.white} name="send" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
  listContainer: {
    paddingBottom: 10,
  },
  flatList: {
    flex: 1,
    marginTop: 20,
  },
  flatlistContainer: { flex: 1, paddingHorizontal: 10 },
  icon: { width: 24, height: 24 },
});

export default ChatScreen;
