import React, { useEffect, useState } from "react";
import { View, Text, Button, Image, TextInput, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { router, useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Categories, FeaturedRow } from "@/components";
import SanityClient from "@/sanity";

const Home = () => {
  const [featuredCategory, setFeaturedCategory] = useState<any>([]);

  useEffect(() => {
    SanityClient.fetch(
      `
          *[_type=="featured"]{
            ...,
            restaurants[]->{
              ...,
              dishes[]->{
                ...
              }
            }
          } 
        `
    ).then((data) => setFeaturedCategory(data));
  }, []);

  // console.log('featuredCategory',featuredCategory);

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView className="bg-white pt-5">
        {/*Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />

          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
            <View className="flex-row items-center">
              <Text className="font-bold text-xl">Current Location</Text>
              <ChevronDownIcon size={20} color={"#00CCBB"} />
            </View>
          </View>

          <UserIcon size={35} color={"#00CCBB"} />
        </View>

        {/*Search */}

        <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-1 items-center flex-row bg-gray-300 space-x-4 p-3">
            <MagnifyingGlassIcon size={20} color={"gray"} />
            <TextInput
              placeholder="Restaurant and cuisines"
              keyboardType="default"
            />
          </View>

          <AdjustmentsVerticalIcon color={"#00CCBB"} />
        </View>

        {/*Body */}
        <ScrollView
          className="bg-gray-100 mb-6"
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          {/*Catégories */}
          <Categories />
          {/*Featured Row */}

          {featuredCategory?.map((category: any) => (
            <FeaturedRow
              key={category._id}
              id={category._id}
              title={category.name}
              description={category.short_description}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
