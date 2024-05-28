import { StyleSheet, View } from "react-native";
import Player from "./Player";

export default function PlayerSection() {
  return (
    <View style={styles.container}>
      <Player />
      <Player />
      <Player />
      <Player />
      <Player />
      <Player />
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
    flexDirection: "row",
    flex: 1,
    maxWidth: 40,
    maxHeight: 40,
    minWidth: 40,
    minHeight: 40,
    alignContent: "flex-start",
    marginRight: 85,
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
