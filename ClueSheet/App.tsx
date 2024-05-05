import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Tile from "./components/Tile";
import Line from "./components/Line";
import Section from "./components/Section";
import { Header } from "react-native-elements";

export default function App() {
  return (
    <View style={styles.container}>
      <Header
        centerComponent={{ text: "Clue Sheet", style: { color: "#fff" } }}
        backgroundColor="#df27df"
      />
      <ScrollView>
        <Section label="Pessoal" />
        <Section label="Armas" />
        <Section label="Salas" />
        <StatusBar style="auto" />
      </ScrollView>
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
