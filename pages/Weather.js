import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Geolocation from "react-native-geolocation-service";
import * as Location from "expo-location";
import Spinner from "react-native-loading-spinner-overlay";

import { API_KEY } from "../utils/WeatherAPIKey";
import { weatherConditions } from "../utils/WeatherConditions";

export default function Weather() {
  const [isLoading, setIsLoading] = useState(true);
  const [temperature, setTemperature] = useState(0);
  const [weatherCondition, setWeatherCondition] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = (lat = 35, lon = 139) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setTemperature(json.main.temp);
        setWeatherCondition(json.weather[0].main);
        setIsLoading(false);
        console.log(json.main.temp, json.weather[0].main);
      });
  };

  useEffect(() => {
    // let location = Location.getCurrentPositionAsync({});
    // Geolocation.getCurrentPosition(
    //   (position) => {
    fetchWeather(35, 139);
    //   },
    //   error => {
    //     setError('Error Gettig Weather Condtions')
    //   }
    // );
    // alert(location);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.container}>
          <Spinner
            visible={isLoading}
            textContent={"Fetching the weather info..."}
            textStyle={styles.spinnerTextStyle}
          ></Spinner>
        </View>
      ) : (
        <View
          style={[
            styles.container,
            { backgroundColor: weatherConditions[weatherCondition].color },
          ]}
        >
          <View style={styles.headerContainer}>
            <MaterialCommunityIcons
              size={72}
              name={weatherConditions[weatherCondition].icon}
              color={"#fff"}
            ></MaterialCommunityIcons>
            <Text style={styles.tempText}>{temperature}˚</Text>
          </View>
          <View style={styles.bodyContainer}>
            <Text style={styles.title}>
              {weatherConditions[weatherCondition].title}
            </Text>
            <Text style={styles.subtitle}>
              {weatherConditions[weatherCondition].subtitle}
            </Text>
          </View>
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
  headerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bodyContainer: {
    flex: 2,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25,
    marginBottom: 40,
  },
  tempText: {
    fontSize: 48,
    color: "#fff",
    flex: 1,
    alignContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 24,
    color: "#fff",
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 48,
    color: "#fff",
  },
  subtitle: {
    fontSize: 24,
    color: "#fff",
  },
  spinnerTextStyle: {
    color: "#fff",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});
