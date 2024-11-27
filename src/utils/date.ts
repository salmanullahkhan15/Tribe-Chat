import moment from "moment";

export const formatTimestamp = (timestamp: number) => {
  return moment(timestamp).format("HH:mm A");
};
