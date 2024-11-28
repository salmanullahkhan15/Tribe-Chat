import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect, useMemo, useRef } from "react";
import chatStore from "../store/chatStore";
import { formatMessage } from "../utils/helper";
import SentMessage from "../components/SentMessage";
import ReceivedMessage from "../components/ReceivedMessage";
import Header from "../components/Header";
import InputBar from "../components/InputBar";

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
          initialNumToRender={10}
          windowSize={5}
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
