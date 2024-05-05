import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Tile from "./Tile";

export default function Line() {
  return (
    <TouchableOpacity style={styles.touchable} onPress={() => {}}>
      <Text style={styles.text}>Candelabro</Text>
      <View style={styles.container}>
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#FFF",
  },
  container: {
    flex: 1,
    flexGrow: 2,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    flex: 1,
    flexGrow: 1,
    flexShrink: 1,
    color: "#FFF",
    lineHeight: 40,
    // borderLeftWidth: 1,
    // borderLeftColor: "#FFF",
    // borderBottomWidth: 1,
    // borderBottomColor: "#FFF",
  },
});