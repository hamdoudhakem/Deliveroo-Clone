export default {
  name: "category",
  title: "Menu Category",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Category name",
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
      name: "restaurants",
      title: "Restaurants",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "restaurant" }],
        },
      ],
    },
  ],
};
