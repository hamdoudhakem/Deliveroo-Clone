import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/outline";
import DishRow from "@/app/components/DishRow";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BasketIcon } from "../components/Basketicon";

type SearchParams = {
  id: string;
  title: string;
  imgUrl: string;
  rating: string;
  genre: string;
  address: string;
  shortDescription: string;
  dishes: any[];
  long: string;
  lat: string;
  users: any[];
};

const RestaurantScreen = () => {
  const [dishes, setDishes] = useState<any[]>([]);

  const {
    id,
    title,
    imgUrl,
    rating,
    genre,
    address,
    shortDescription,
    long,
    lat,
  } = useLocalSearchParams();

  useEffect(() => {
    const getDishes = async () => {
      return await AsyncStorage.getItem(`Dishes-${id}`);
    };

    getDishes().then((data) => setDishes(JSON.parse(data || "[]")));
  }, []);

  console.log("########################################\nDishes", dishes);
  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
          <Image
            source={{ uri: imgUrl as string }}
            className="w-full h-56 bg-gray-400 p-4"
          />

          <TouchableOpacity
            onPress={router.back}
            className="absolute top-14 left-5 bg-gray-100 p-2 rounded-full"
          >
            <ArrowLeftIcon size={20} color={"#00CCBB"} />
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          <View className="px-4 py-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon size={22} opacity={0.5} color={"green"} />
                <Text className="text-gray-500 text-xs">
                  <Text className="text-green-500">{rating}</Text> • {genre}
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <MapPinIcon size={22} color={"gray"} opacity={0.4} />
                <Text className="text-xs text-gray-500">
                  Nearby . {address}
                </Text>
              </View>
            </View>

            <Text className="text-gray-500 mt-2 pb-4">{shortDescription}</Text>
          </View>

          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon color={"gray"} opacity={0.4} size={20} />
            <Text className="pl-2 flex-1 text-md font-bold">
              Have a food allergy?
            </Text>
            <ChevronRightIcon color={"#00CCBB"} />
          </TouchableOpacity>
        </View>

        <View className="pb-36">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

          {/*dishes */}
          {dishes?.map((dish, index) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
