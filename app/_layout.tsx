import React from "react";
import { View, Text } from "react-native";
import { Stack } from "expo-router";
import { store } from "@/store";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";

const _layout = () => {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <Stack screenOptions={{ headerShown: false }} />
      </Provider>
    </>
  );
};

export default _layout;
