import React from "react";
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

const Home = () => {
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
          <FeaturedRow
            id="1"
            title="Featured"
            description="paid placements from our partenairs"
          />
          <FeaturedRow
            id="2"
            title="Tasty Discounts"
            description="paid placements from our partenairs"
          />
          <FeaturedRow
            id="3"
            title="Offers Near you!"
            description="paid placements from our partenairs"
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
