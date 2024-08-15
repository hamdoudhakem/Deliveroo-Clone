import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  basketItemsSelector,
} from "../features/BasketSlice";

export type DishRowProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: any;
};

const DishRow = ({ id, name, description, price, image }: DishRowProps) => {
  const [isPressed, setIsPressed] = useState(false);
  let items = useSelector(basketItemsSelector);
  items = items.filter((item) => item.id === id);

  const dispatch = useDispatch();

  // console.log("name: ", name);

  const addItemToBasket = () => {
    dispatch(
      addToBasket({
        id,
        name,
        description,
        price,
        image,
      })
    );
  };
  const removeItemToBasket = () => {
    if (items.length <= 0) return;

    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white p-4 border-gray-200 ${isPressed && "border-b-0"}`}
      >
        <View className="flex-row">
          <View className="flex-1 p r-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">£{price}</Text>
          </View>

          <View>
            <Image
              source={{ uri: image }}
              className="h-20 w-20 bg-gray-300 p-4"
              style={{
                borderWidth: 1,
                borderColor: "#F3F3F4",
              }}
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-2">
            <TouchableOpacity onPress={removeItemToBasket}>
              <MinusCircleIcon
                size={40}
                disabled={items.length > 0}
                color={items.length > 0 ? "#00CCBB" : "gray"}
              />
            </TouchableOpacity>

            <Text>{items.length}</Text>

            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon size={40} color={"#00CCBB"} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
