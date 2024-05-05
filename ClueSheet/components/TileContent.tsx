import { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import Dialog, { DialogContent } from "react-native-popup-dialog";

const possibleOptions = [
  "X",
  "-",
  "?",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

const notationOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

const valuesOptions = ["X", "-", "?"];

type TileContentProps = {
  value: string;
};

export default function TileContent({ value }: TileContentProps) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>1</Text>
        <Text style={styles.text}>2</Text>
        <Text style={styles.text}>3</Text>
      </View>
      <View style={{ ...styles.row, minHeight: 20 }}>
        <Text style={{ ...styles.text, lineHeight: 20 }}>4</Text>
        <Text style={{ ...styles.text, lineHeight: 20, fontSize: 16 }}>
          {value}
        </Text>
        <Text style={{ ...styles.text, lineHeight: 20 }}>5</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>6</Text>
        <Text style={styles.text}>7</Text>
        <Text style={styles.text}>8</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    maxWidth: 40,
    maxHeight: 40,
    minWidth: 40,
    minHeight: 40,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    minWidth: 10,
    minHeight: 10,
  },
  text: {
    flex: 1,
    flexGrow: 1,
    flexBasis: "auto",
    textAlign: "center",
    color: "#FFF",
    display: "flex",
    fontSize: 6,
    lineHeight: 10,
  },
});
