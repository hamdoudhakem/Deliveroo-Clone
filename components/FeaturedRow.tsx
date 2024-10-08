import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import { RestaurantCard } from "./RestaurantCard";
import sanityClient from "@/sanity";

const FeaturedRow = ({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) => {
  const [restaurants, setRestaurants] = useState<any>([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
          *[_type=="featured" && _id==$id]{
            ...,
            restaurants[]->{
              ...,
              dishes[]->{
                ...,
              },
              type->{
               name
              }          
            }
          }[0]
        `,
        { id: id }
      )
      .then((data) => setRestaurants(data?.restaurants));
  }, []);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon size={20} color={"#00CCBB"} />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="pt-4"
      >
        {/*Restaurant Cards */}
        {restaurants?.map((restaurant: any) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            shortDescription={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export { FeaturedRow };
