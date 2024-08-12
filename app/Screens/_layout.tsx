import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="Home" options={{ headerShown: false }} />
      <Stack.Screen name="RestaurantScreen" options={{ headerShown: false }} />
    </Stack>
  );
};

export default _layout;
