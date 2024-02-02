import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Alert,
} from "react-native";
import Header from "./Header";
 
const TodoInput = props => {
  const [enteredTask, setEnteredTask] = useState("");
 
  const TodoInputHandler = enteredText => {
    setEnteredTask(enteredText);
  };
 
  const addTaskHandler = () => {
    props.onAddTask(enteredTask);
    setEnteredTask("");
  };
 
  const checkInput = enteredTask => {
    if (enteredTask.length > 0) addTaskHandler();
    else {
      Alert.alert("Error", "Please enter a Task", [{ text: "OK" }], {
        cancelable: false
      });
    }
  };
 
  return (
    <Modal visible={props.visible} animationType="slide">
      <Header title="To-Do App"></Header>
 
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Task"
          style={styles.input}
          onChangeText={TodoInputHandler}
          value={enteredTask}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="CANCEL"
              color="red"
              onPress={props.onCancel}
            ></Button>
          </View>
          <View style={styles.button}>
            <Button
              title="ADD"
              color="green"
              onPress={() => checkInput(enteredTask)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
 
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%"
  },
  button: {
    width: "40%"
  }
});
 
export default TodoInput;