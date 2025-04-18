import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Dish Name",
      validation: Rule => Rule.required().min(5).max(50),
    }),
    defineField({
      name: "short_description",
      type: "string",
      title: "Short Description",
      validation: Rule => Rule.required().min(10).max(200),
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image of the Dish",
    }),
    defineField({
      name: "price",
      type: "number",
      title: "Price of the Dish",
      validation: Rule => Rule.required(),
    }),
  ],
})
