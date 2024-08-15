import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "@/store";

const _layout = () => {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="Home" options={{ headerShown: false }} />
        <Stack.Screen
          name="RestaurantScreen"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BasketScreen"
          options={{ headerShown: false, presentation: "modal" }}
        />
        <Stack.Screen
          name="PreparingOrderScreen"
          options={{ headerShown: false, presentation: "fullScreenModal" }}
        />
        <Stack.Screen
          name="Delivery"
          options={{ headerShown: false, presentation: "fullScreenModal" }}
        />
      </Stack>
    </Provider>
  );
};

export default _layout;
