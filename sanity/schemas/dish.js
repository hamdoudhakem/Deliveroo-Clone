export default {
  name: "dish",
  title: "Dish",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name of dish",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      title: "Short Description",
      type: "string",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "price",
      title: "Price of the dish in GBP",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: "image",
      title: "Image of the dish",
      type: "image",
    },
  ],
};
