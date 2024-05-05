import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Tile from "./Tile";
import Line from "./Line";

type SectionProps = {
  label: string;
};

export default function Section({ label }: SectionProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
    </View>
  );
}

const styles = StyleSheet.create({
  touchable: { display: "flex", flexDirection: "row" },
  container: {
    flex: 1,
    // maxHeight: 300,
    width: 350,
    alignContent: "flex-start",
    flexDirection: "column",
    borderStyle: "dotted",
    borderColor: "red",
    borderWidth: 1,
  },
  text: {
    flex: 1,
    flexGrow: 1,
    flexShrink: 1,
    color: "#FFF",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#FFF",
    fontSize: 30,
  },
});
