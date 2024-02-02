import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Weather() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons size={48} name="weather-sunny" color={'#fff'}></MaterialCommunityIcons>
        <Text style={styles.tempText}>Temperature˚</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>So Sunny</Text>
        <Text style={styles.subtitle}>It hurts my eyes!</Text>
      </View>
      {isLoading ? (
        <Text>Fetching The Weather</Text>
      ) : (
        <View>
          <Text>Mimimalist Whether app</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7b733",
  },
  headerContainer: {},
  bodyContainer: {},
  tempText: {},
  title: {},
  subtitle: {

  }
});
