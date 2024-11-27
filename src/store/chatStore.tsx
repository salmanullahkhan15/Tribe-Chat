import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

interface ChatState {
  messages: TMessage[];
  participants: TParticipant[];
  lastUpdated: number;
  fetchMessages: () => Promise<void>;
  fetchParticipants: () => Promise<void>;
  loadFromStorage: () => Promise<void>;
  sendMessage: (message: TMessage) => void;
  sendMessageToServer: (message: string) => void;
}

const chatStore = create<ChatState>((set, get) => ({
  messages: [],
  participants: [],
  lastUpdated: 0,

  fetchMessages: async () => {
    try {
      const response = await fetch(
        "http://dummy-chat-server.tribechat.pro/api/messages/all"
      );
      const data: TMessage[] = await response.json();
      set({ messages: data });
      await AsyncStorage.setItem("messages", JSON.stringify(data));
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  },

  fetchParticipants: async () => {
    try {
      const response = await fetch(
        "http://dummy-chat-server.tribechat.pro/api/participants/all"
      );
      const data: TParticipant[] = await response.json();
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
      const response = await fetch(
        "http://dummy-chat-server.tribechat.pro/api/messages/new",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text }),
        }
      );
      const newMessage: TMessage = await response.json();
      get().sendMessage(newMessage);
    } catch (error) {
      console.error("Error sending message to server:", error);
    }
  },
}));

export default chatStore;
