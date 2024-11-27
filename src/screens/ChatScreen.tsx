import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import React, { useEffect, useMemo, useRef } from "react";
import chatStore from "../store/chatStore";
import { formatMessage } from "../utils/helper";
import SentMessage from "../components/common/SentMessage";
import ReceivedMessage from "../components/common/ReceivedMessage";
import Header from "../components/common/Header";
import InputBar from "../components/common/InputBar";

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
    fetchMessages();
    fetchParticipants();
  }, []);

  useEffect(() => {
    (async () => {
      await loadFromStorage();
    })();
  }, []);

  const formatedMessages = useMemo(
    () => formatMessage(messages, participants).reverse(),
    [messages, participants]
  );

  const renderMessage = ({ item }: { item: TMessageWithParticipantsGroup }) => {
    return item.authorUuid == "you" ? (
      <SentMessage messages={item?.messages} />
    ) : (
      <ReceivedMessage
        authorName={item.author?.name}
        authorImage={item.author?.avatarUrl}
        messages={item?.messages}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header />
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
      <InputBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    paddingBottom: 10,
  },
  flatList: {
    flex: 1,
    marginTop: 20,
  },
  flatlistContainer: { flex: 1, paddingHorizontal: 10 },
});

export default ChatScreen;
