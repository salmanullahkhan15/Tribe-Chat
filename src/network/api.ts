import axios from "axios";

const API_BASE = "http://dummy-chat-server.tribechat.pro/api";

export const fetchAllMessages = async () => {
  try {
    const response = await axios.get(`${API_BASE}/messages/all`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchParticipants = async () => {
  try {
    const response = await axios.get(`${API_BASE}/participants/all`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const postNewMessage = async (text: TMessage) => {
  try {
    const response = await axios.post(`${API_BASE}/messages/new`, { text });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
