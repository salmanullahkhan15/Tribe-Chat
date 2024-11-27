import { StyleSheet, Text, View } from "react-native";
import ChatScreen from "./src/screens/ChatScreen";
import { useFonts } from "expo-font";
import { FontFamily } from "./src/utils/Fonts";

export default function App() {
  const [fontsLoaded] = useFonts({
    [FontFamily.Source_Sans_Regular]: require("./src/assets/fonts/SourceSans3-Regular.ttf"),
    [FontFamily.Source_Sans_Bold]: require("./src/assets/fonts/SourceSans3-SemiBold.ttf"),
  });

  console.log(fontsLoaded, "fontsLoaded");

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
