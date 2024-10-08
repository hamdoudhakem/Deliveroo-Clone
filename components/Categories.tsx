import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { CategorieCard } from "./CategorieCard";
import SanityClient, { urlFor } from "@/sanity";

const Categories = () => {
  const [categories, setCategories] = useState<any>([]);

  useEffect(() => {
    SanityClient.fetch(`*[_type=="category"]`).then((data) =>
      setCategories(data)
    );
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories?.map((category: any) => (
        <CategorieCard
          key={category._id}
          imgUrl={urlFor(category.image).width(200).url()}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
};

export { Categories };
