export default {
  name: "featured",
  title: "Featured Menu Categories",
  type: "document",
  fields: [
    {
      name: "name",
      title: "featured Category name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "image of categorie",
      type: "image",
    },
  ],
};
