import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { useSelector } from "react-redux";
import {
  basketItemsSelector,
  basketTotalSelector,
} from "../features/BasketSlice";

const BasketIcon = () => {
  const items = useSelector(basketItemsSelector);
  const basketTotal = useSelector(basketTotalSelector);
  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity className="mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1">
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-white text-lg font-extrabold text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          £{basketTotal.toFixed(2)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export { BasketIcon };
