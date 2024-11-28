import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import {
  fetchAllMessages,
  fetchParticipants,
  postNewMessage,
} from "../network/api";

interface ChatState {
  messages: TMessage[];
  participants: TParticipant[];
  fetchMessages: () => Promise<void>;
  fetchParticipants: () => Promise<void>;
  loadFromStorage: () => Promise<void>;
  sendMessage: (message: TMessage) => void;
  sendMessageToServer: (message: string) => void;
}

const chatStore = create<ChatState>((set, get) => ({
  messages: [],
  participants: [],

  fetchMessages: async () => {
    try {
      const data: TMessage[] = await fetchAllMessages();
      set({ messages: data });
      await AsyncStorage.setItem("messages", JSON.stringify(data));
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  },

  fetchParticipants: async () => {
    try {
      const data: TParticipant[] = await fetchParticipants();
      set({ participants: data });
      await AsyncStorage.setItem("participants", JSON.stringify(data));
    } catch (error) {
      console.error("Error fetching participants:", error);
    }
  },

  loadFromStorage: async () => {
    try {
      const messages = await AsyncStorage.getItem("messages");
      const participants = await AsyncStorage.getItem("participants");
      if (messages) set({ messages: JSON.parse(messages) });
      if (participants) set({ participants: JSON.parse(participants) });
    } catch (error) {
      console.error("Error loading from storage:", error);
    }
  },

  sendMessage: (message) => {
    const messages = get().messages;
    const updatedMessages = [message, ...messages];
    set({ messages: updatedMessages });
    AsyncStorage.setItem("messages", JSON.stringify(updatedMessages)).catch(
      (error) => console.error("Error saving message to storage:", error)
    );
  },

  sendMessageToServer: async (text: string) => {
    try {
      const newMessage: TMessage = await postNewMessage(text);
      get().sendMessage(newMessage);
    } catch (error) {
      console.error("Error sending message to server:", error);
    }
  },
}));

export default chatStore;
