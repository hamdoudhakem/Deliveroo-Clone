import React from "react";
import { View, Text } from "react-native";
import { Redirect } from "expo-router";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const index = () => {
  console.log("Redirecting to Home");

  return <Redirect href={{ pathname: "/Screens/Home" }} />;
};

export default index;
