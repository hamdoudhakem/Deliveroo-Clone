import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default _layout;
