import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { StarIcon, MapPinIcon } from "react-native-heroicons/outline";

type RestaurantCardProps = {
  id: string;
  title: string;
  imgUrl: string;
  rating: number;
  genre: string;
  address: string;
  shortDescription: string;
  dishes: string[];
  long: number;
  lat: number;
};

const RestaurantCard = ({
  id,
  title,
  imgUrl,
  rating,
  genre,
  address,
  shortDescription,
  dishes,
  long,
  lat,
}: RestaurantCardProps) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow mb-2">
      <Image source={{ uri: imgUrl }} className="h-36 w-64 rounded-sm" />

      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon size={22} color={"green"} opacity={0.5} />
          <Text>
            <Text className="text-green-500">{rating} </Text> . {genre}
          </Text>
        </View>

        <View className="flex-row items-center space-x-1">
          <MapPinIcon size={22} color={"gray"} opacity={0.4} />
          <Text className="text-xs text-gray-500">Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export { RestaurantCard };
