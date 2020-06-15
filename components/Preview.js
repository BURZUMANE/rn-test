import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import axios from "axios";

export const Preview = ({
  route: {
    params: { uri, desc },
  },
  navigation,
}) => {
  return (
    <View style={{ width: "100%" }}>
      <Image source={{ uri: uri }} style={styles.image} />
      <Text style={styles.text}>{desc}</Text>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    height: 400,
    display: "flex",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    position: "absolute",
    backgroundColor: "white",
    color: "black",
    width: "80%",
    zIndex: 2,
    left: "10%",
    bottom: "10%",
  },
});
