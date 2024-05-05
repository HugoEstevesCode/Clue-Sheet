import { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import Dialog, {
  DialogButton,
  DialogContent,
  DialogFooter,
} from "react-native-popup-dialog";

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

export default function Tile() {
  const [value, setValue] = useState("");
  const [showOptionMenu, setShowOptionMenu] = useState(false);
  const [notations, setNotations] = useState([]);

  const selectOption = (option: string) => {
    if (valuesOptions.includes(option)) {
      setValue(option);
      setShowOptionMenu(false);
    }
  };

  return (
    <TouchableOpacity onPress={() => setShowOptionMenu(true)}>
      <View style={styles.container}>
        <Text style={styles.text}>{value}</Text>
        <Dialog
          visible={showOptionMenu}
          onTouchOutside={() => setShowOptionMenu(false)}
        >
          <DialogContent style={styles.dialogContent}>
            {possibleOptions.map((option) => (
              <TouchableHighlight
                style={{ height: 40 }}
                underlayColor={"#ffffff4c"}
                onPress={() => selectOption(option)}
              >
                <Text style={styles.dialogOption}>{option}</Text>
              </TouchableHighlight>
            ))}
          </DialogContent>
        </Dialog>
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
