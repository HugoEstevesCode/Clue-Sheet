import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Tile from "./Tile";

type LineProps = {
  name: string;
};

export default function Line({ name }: LineProps) {
  const [isFilled, setIsFilled] = useState(false);

  return (
    <TouchableOpacity
      style={styles.touchable}
      onPress={() => setIsFilled(!isFilled)}
    >
      <Text style={styles.text}>{name}</Text>
      <View style={styles.container}>
        <Tile isFilled={isFilled} />
        <Tile isFilled={isFilled} />
        <Tile isFilled={isFilled} />
        <Tile isFilled={isFilled} />
        <Tile isFilled={isFilled} />
        <Tile isFilled={isFilled} />
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
