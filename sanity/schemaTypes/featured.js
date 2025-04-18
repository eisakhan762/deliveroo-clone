import {defineField, defineType} from 'sanity'

export default defineType({
  name: "featured",
  title: "Featured Menu Categories",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Featured Category Name",
      validation: Rule => Rule.required().min(3).max(50),
    }),
    defineField({
      name: "short_description",
      type: "string",
      title: "Short Description",
      validation: Rule => Rule.required().min(10).max(200),
    }),
    defineField({
      name: "restaurants",
      title: "Restaurants",
      type: "array",
      of: [{type: "reference", to: [{type: "restaurant"}]}],
    })
  ]
})