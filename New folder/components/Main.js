import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList, Linking } from "react-native";

import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import DisplayImage from "./DisplayImage";
import Header from "./Header";

export default function Main({navigation}) {
  const [tasks, setTasks] = useState([]);
  const [addTasks, setAddTasks] = useState(false);

  const addTaskHandler = (taskTitle) => {
    setTasks((currentTasks) => [
      ...currentTasks,
      { id: Math.random().toString(), value: taskTitle },
    ]);
    setAddTasks(false);
  };

  const deleteTaskHandler = (taskId) => {
    setTasks((currentTasks) => {
      return currentTasks.filter((task) => task.id !== taskId);
    });
  };

  const canceltaskAdditionHandler = () => {
    setAddTasks(false);
  };

  return (
    <View>
      <Header title="To-Do App"></Header>
      <View style={styles.screen}>
        <Button title="Add New task" onPress={() => setAddTasks(true)}></Button>
        <Button
          title="Calculator"
          style={styles.calculatorButton}
          onPress={() => {
            navigation.navigate('Calculator', {name: 'Calculator'})
          }}
        ></Button>
        <Button title="Weather" onPress={() => {
          navigation.navigate('Weather', {name: 'Weather'})
        }}></Button>
        <TodoInput
          visible={addTasks}
          onAddTask={addTaskHandler}
          onCancel={canceltaskAdditionHandler}
        />
      </View>
      <DisplayImage taskStatus={tasks} />

      <View style={styles.screenlist}>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={tasks}
          renderItem={(itemData) => (
            <TodoItem
              title={itemData.item.value}
              onDelete={deleteTaskHandler}
              id={itemData.item.id}
            />
          )}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 70,
    paddingHorizontal: 70,
  },
  screenlist: {
    marginLeft: 20,
    marginRight: 20,
  },
  calculatorButton: {
    marginTop: 5
  }
});
