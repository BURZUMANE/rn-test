import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

const getName = item => item.description.substring(1, 10);

export const ImageList = ({ navigation }) => {
  const [state, setState] = useState({});
  useEffect(() => {
    const getPics = async () => {
      axios
        .get(
          "https://api.unsplash.com/search/photos?page=1&query=animals&client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043",
        )
        .then(data => {
          const response = data.data;
          const pics = response.results;
          setState(pics);
        });
    };
    getPics();
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        {state.length > 0 &&
          state.map((item, idx) => {
            return (
              <View key={idx} onPress={() => navigation.navigate("Preview")}>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>
                    {item.description
                      ? `${item.description.substring(0, 10)}...`
                      : "No name"}
                  </Text>
                  <Text style={styles.text}>By: {item.user.first_name}</Text>
                </View>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Preview", {
                      uri: item.urls.regular,
                      desc: item.description,
                    })
                  }>
                  <ImageBackground
                    style={styles.image}
                    source={{ uri: item.urls.small }}>
                    <View style={styles.overlay} />
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            );
          })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "#F3F3F3",
  },
  image: {
    width: Dimensions.get("window").width / 2 - 40,
    height: 150,
    margin: 10,
  },
  flatListStyle: { flex: 1 },
  search: {
    height: 30,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 20,
    marginTop: 10,
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "red",
    opacity: 0.3,
  },
  textContainer: {
    position: "absolute",
    left: "10%",
    bottom: "15%",
    zIndex: 2,
  },
  text: {
    backgroundColor: "white",
    color: "black",
  },
});

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: "10%",
//     backgroundColor: "#fff",
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//     justifyContent: "space-around",
//   },
//   flexItem: {
//     marginBottom: 20,
//     width: 150,
//     height: 150,
//     borderColor: "black",
//     borderWidth: 1,
//     backgroundColor: "red",
//   },
// });

export default ImageList;
