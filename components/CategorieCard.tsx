import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const CategorieCard = ({
  imgUrl,
  title,
}: {
  imgUrl: string;
  title: string;
}) => {
  return (
    <TouchableOpacity className="mr-3 relative">
      <Image source={{ uri: imgUrl }} className="w-20 h-20 rounded" />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export { CategorieCard };
