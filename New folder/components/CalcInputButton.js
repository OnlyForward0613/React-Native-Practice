import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

export default function CalcInputButton(props) {
  return (
    <TouchableHighlight
      style={styles.inputButton}
      underlayColor="#193441"
      onPress={props.onPress}
    >
        <Text style={styles.inputButtonText}>{props.value}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  inputButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: "#91AA9D",
  },

  inputButtonText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },

  inputButtonHighlighted: {
    backgroundColor: '#193441'
  }
});
