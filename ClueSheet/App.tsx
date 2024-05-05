import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Tile from "./components/Tile";
import Line from "./components/Line";
import Section from "./components/Section";
import { Header } from "react-native-elements";
import PlayerSection from "./components/PlayersSection";
import { ReactNode } from "react";

const data = [
  {
    label: "Pessoas",
    options: ["Mustard", "Plum", "Green", "Peacock", "Scarlett", "White"],
  },
  {
    label: "Armas",
    options: [
      "Punhal",
      "Candelabro",
      "Revólver",
      "Corda",
      "Cano de Chumbo",
      "Chave Inglesa",
    ],
  },
  {
    label: "Salas",
    options: [
      "Entrada",
      "Sala",
      "Sala Jantar",
      "Salão Baile",
      "Jardim Inverno",
      "Sala Bilhar",
      "Biblioteca",
      "Escritóro",
    ],
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Header
        centerComponent={{ text: "Clue Sheet", style: { color: "#fff" } }}
        backgroundColor="#df27df"
      />
      <PlayerSection />
      <ScrollView>
        {data.map<ReactNode>((section) => (
          <Section
            key={section.label}
            label={section.label}
            options={section.options}
          />
        ))}
        {/* <Section label="Armas" options={[]} />
        <Section label="Salas" options={[]} /> */}
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
