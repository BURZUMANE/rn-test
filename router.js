import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ImageList } from "./components/ImageList";
import { Preview } from "./components/Preview";

const Stack = createStackNavigator();

const useRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ImageList" component={ImageList} />
      <Stack.Screen name="Preview" component={Preview} />
    </Stack.Navigator>
  );
};

export default useRoute;
