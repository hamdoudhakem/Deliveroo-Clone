import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Image, BackHandler } from "react-native";
import { router } from "expo-router";
import {
  clearRestaurant,
  restaurantSelector,
} from "@/features/RestaurantSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { XMarkIcon } from "react-native-heroicons/solid";
import { clearBasket } from "@/features/BasketSlice";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";

const Delivery = () => {
  const restaurant = useSelector(restaurantSelector);

  const dispatch = useDispatch();

  const clearStates = () => {
    console.log("clearing states");

    dispatch(clearRestaurant());
    dispatch(clearBasket());
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        router.navigate("/Home");
        clearStates();
        return true;
      }
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity
            onPress={() => {
              clearStates();
              router.navigate("/Home");
            }}
          >
            <XMarkIcon color={"white"} size={30} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">40-55 Minutes</Text>
            </View>
            <Image
              source={{ uri: "https://links.papareact.com/fls" }}
              className="w-20 h-20"
            />
          </View>

          <Progress.Bar width={150} color="#00CCBB" indeterminate={true} />

          <Text className="mt-3 text-gray-500">
            Your order at {restaurant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
          latitude: parseInt(restaurant.lat),
          longitude: parseInt(restaurant.long),
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: parseInt(restaurant.lat),
            longitude: parseInt(restaurant.long),
          }}
          title={restaurant.title}
          description={restaurant.shortDescription}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>

      <View className="bg-white flex-row items-center space-x-5 h-28">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />
        <View className="flex-1 ">
          <Text className="text-lg">John Robert</Text>
          <Text className="text-gray-400 ">Your Rider</Text>
        </View>
        <TouchableOpacity>
          <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Delivery;
