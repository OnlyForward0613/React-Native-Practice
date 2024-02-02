import React from "react";
import { Image, StyleSheet } from "react-native";

const DisplayImage = (props) => {
  if (props.taskStatus.length < 1) {
    return (
      <Image
        style={styles.image}
        source={require("../assets/Profile.png")}
      ></Image>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
    margin: 80,
    marginTop: 250,
  },
});

export default DisplayImage;