import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import TileContent from "./TileContent";

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

type TileProps = {
  isFilled: boolean;
};

export default function Tile({ isFilled }: TileProps) {
  const [value, setValue] = useState("");
  const [showOptionMenu, setShowOptionMenu] = useState(false);
  const [notations, setNotations] = useState<string[]>([]);

  const selectOption = (option: string) => {
    if (value === option) {
      setValue("");
      setShowOptionMenu(false);
      return;
    }

    if (valuesOptions.includes(option)) {
      setValue(option);
      setShowOptionMenu(false);
      return;
    }

    if (notationOptions.includes(option)) {
      if (notations.includes(option)) {
        const newNotations = notations.filter((opt) => opt !== option);
        setNotations(newNotations);
      } else {
        const newNotations = [...notations];
        newNotations.push(option);
        setNotations(newNotations);
      }
      setShowOptionMenu(false);
      return;
    }
  };

  return (
    <TouchableOpacity onPress={() => setShowOptionMenu(true)}>
      <View style={styles.container}>
        <TileContent value={value} notations={notations} isFilled={isFilled} />
        <Modal
          visible={showOptionMenu}
          onPointerLeave={() => setShowOptionMenu(false)}
          animationType="slide"
          transparent
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View style={styles.dialogContent}>
              {possibleOptions.map((option) => (
                <TouchableHighlight
                  key={option}
                  style={{ height: 40 }}
                  underlayColor={"#ffffff4c"}
                  onPress={() => selectOption(option)}
                >
                  <Text style={styles.dialogOption}>{option}</Text>
                </TouchableHighlight>
              ))}
            </View>
          </View>
        </Modal>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 40,
    maxHeight: 40,
    minWidth: 40,
    minHeight: 40,
    borderWidth: 1,
    borderColor: "#FFF",
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 0,
    borderTopWidth: 0,
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
