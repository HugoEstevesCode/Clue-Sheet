import React, { ReactNode } from "react";
import { StatusBar } from "expo-status-bar";
import { Header } from "react-native-elements";
import { ScrollView, StyleSheet, View } from "react-native";
import Section from "./components/Section";
import PlayerSection from "./components/PlayersSection";
import { AppContextProvider, useAppContext } from "./components/AppContext";

export default function App() {
  return (
    <AppContextProvider>
      <ClueApp />
    </AppContextProvider>
  );
}

function ClueApp() {
  const { state } = useAppContext();
  return (
    <View style={styles.container}>
      <Header
        centerComponent={{ text: "Clue Sheet", style: { color: "#fff" } }}
        backgroundColor="#df27df"
      />
      <PlayerSection />
      <ScrollView>
        {state.map<ReactNode>((section) => (
          <Section
            key={section.label}
            label={section.label}
            options={section.options}
          />
        ))}
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
