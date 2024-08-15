import React, { useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { restaurantSelector } from "@/features/RestaurantSlice";
import {
  basketItemsSelector,
  basketTotalSelector,
  removeFromBasket,
} from "@/features/BasketSlice";
import { DishRowProps } from "../components/DishRow";
import { SafeAreaView } from "react-native-safe-area-context";
import { XCircleIcon } from "react-native-heroicons/solid";

type BasketItems = { [key: string]: DishRowProps[] };

const BasketScreen = () => {
  const restaurant = useSelector(restaurantSelector);
  const items = useSelector(basketItemsSelector);
  const basketTotal = useSelector(basketTotalSelector);
  const [groupedItemsBasket, setGroupedItemsBasket] = useState<BasketItems>();
  const dispatch = useDispatch();

  useMemo(() => {
    const initialObj: BasketItems = {};

    const groupedItems = items.reduce((results, item) => {
      results[item.id] = results[item.id] || [];
      results[item.id].push(item);

      return results;
    }, initialObj);

    setGroupedItemsBasket(groupedItems);

    if (Object.keys(groupedItems).length === 0) {
      router.back();
    }
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      <View className="flex-1 bg-gray-100">
        <View className="p-4 border-b border-[#00CCBB] bg-white shadow-sm">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => router.back()}
            className="rounded-full absolute top-3 right-5"
          >
            <XCircleIcon height={50} width={50} color={"#00CCBB"} />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5 ">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Charge</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsBasket || {}).map(([key, items]) => {
            return (
              <View
                key={key}
                className="flex-row items-center space-x-3 bg-white py-2 px-5"
              >
                <Text className="text-[#00CCBB]">{items.length} x</Text>
                <Image
                  source={{ uri: items[0].image }}
                  className="h-12 w-12 rounded-full"
                />
                <Text className="flex-1">{items[0].name}</Text>

                <Text className="text-gary-600">
                  £{items[0].price.toFixed(2)}
                </Text>

                <TouchableOpacity
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  <Text className="text-[#00CCBB] text-xs">Remove</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>

        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">SubTotal</Text>
            <Text className="text-gray-400">£{basketTotal.toFixed(2)}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery fee</Text>
            <Text className="text-gray-400">£{4.99}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text>Order Total</Text>
            <Text className="font-extrabold">
              £{(basketTotal + 4.99).toFixed(2)}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => router.navigate("/PreparingOrderScreen")}
            className="rounded-lg bg-[#00CCBB] p-4"
          >
            <Text className="text-center text-white text-lg font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
