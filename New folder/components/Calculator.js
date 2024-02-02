import React, { useState } from "react";
import { Image, StyleSheet, View, Text, AppRegistry } from "react-native";
import CalcInputButton from "./CalcInputButton";

const inputButtons = [
  [1, 2, 3, "/"],
  [4, 5, 6, "*"],
  [7, 8, 9, "-"],
  [0, ".", "=", "+"],
];

const Calculator = () => {
  const [inputValue, setInputValue] = useState(0);
  const [visibleValue, setVisibleValue] = useState("");
  const [previousInputValue, setPreviousInputValue] = useState(0);
  const [selectedSymbol, setSelectedSymbol] = useState(null);

  const renderInputButtons = () => {
    const onInputButtonPressed = (input) => {
      switch (typeof input) {
        case "number":
          return handleNumberInput(input);
        case "string":
          return handleStringInput(input);
      }
    };

    const handleNumberInput = (num) => {
      if (selectedSymbol === "/" && num === 0) {
        return alert("Syntax Error: Zero dividing!");
      }

      let inputVal = inputValue * 10 + num;
      setInputValue(inputVal);
      if (selectedSymbol) {
        setVisibleValue(visibleValue + num);
      } else {
        setVisibleValue(inputVal);
      }
    };

    const handleStringInput = (str) => {
      switch (str) {
        case "/":
        case "*":
        case "+":
        case "-":
          setSelectedSymbol(str);
          setPreviousInputValue(inputValue);
          setInputValue(0);
          setVisibleValue(visibleValue + str);
          break;
        case "=":
          let symbol = selectedSymbol,
            inputVal = inputValue,
            previousInputVal = previousInputValue;

          if (!symbol) {
            return;
          }

          setPreviousInputValue(0);
          setInputValue(eval(previousInputVal + symbol + inputVal));
          setVisibleValue(eval(previousInputVal + symbol + inputVal));
          setSelectedSymbol(null);
          break;
      }
    };

    let views = [];

    for (var r = 0; r < inputButtons.length; r++) {
      let row = inputButtons[r];

      let inputRow = [];
      for (var i = 0; i < row.length; i++) {
        let input = row[i];

        inputRow.push(
          <CalcInputButton
            value={input}
            highlight={selectedSymbol === input}
            onPress={() => onInputButtonPressed(input)}
            key={r + "-" + i}
          />
        );
      }

      views.push(
        <View style={styles.inputRow} key={"row-" + r}>
          {inputRow}
        </View>
      );
    }

    return views;
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{visibleValue}</Text>
      </View>
      <View style={styles.inputContainer}>{renderInputButtons()}</View>
    </View>
  );
};

AppRegistry.registerComponent("Calculator", () => Calculator);

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  displayContainer: {
    flex: 2,
    backgroundColor: "#193441",
  },
  inputContainer: {
    flex: 8,
    backgroundColor: "#3E606F",
  },
  inputRow: {
    flex: 1,
    flexDirection: "row",
  },
  displayText: {
    color: "white",
    fontSize: 38,
    fontWeight: "bold",
    textAlign: "right",
    padding: 20,
  },
});

export default Calculator;
