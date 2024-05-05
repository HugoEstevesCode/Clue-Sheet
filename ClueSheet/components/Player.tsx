import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input } from "react-native-elements";

export default function Player() {
  return (
    <View style={styles.container}>
      <Input
        inputContainerStyle={{
          height: 10,
          alignSelf: "center",
        }}
        style={styles.input}
        placeholder="Pl 1"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 8,
    color: "#FFF",
  },
  container: {
    display: "flex",
    flex: 1,
    maxWidth: 40,
    maxHeight: 40,
    minWidth: 40,
    minHeight: 40,
    borderWidth: 1,
    borderColor: "#FFF",
    borderStyle: "solid",
    alignContent: "center",
  },
  text: {
    color: "#FFF",
  },
  dialogContent: {
    width: 200,
    height: 150,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 0,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "space-around",
    justifyContent: "center",
    backgroundColor: "#312e2e",
  },
  dialogOption: {
    maxHeight: 30,
    width: 40,
    textAlign: "center",
    lineHeight: 40,
    color: "#df27df",
  },
});
