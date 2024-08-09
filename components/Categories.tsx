import React from "react";
import { View, Text, ScrollView } from "react-native";
import { CategorieCard } from "./CategorieCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategorieCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
      <CategorieCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
      <CategorieCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
      <CategorieCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
      <CategorieCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
      <CategorieCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
    </ScrollView>
  );
};

export { Categories };
