import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Tile from "./components/Tile";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Test</Text>
      <Tile />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d1c1c",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFF",
  },
});
