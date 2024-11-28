import { StyleSheet, View } from "react-native";
import ChatScreen from "./src/screens/ChatScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ChatScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
