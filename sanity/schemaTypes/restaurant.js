import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(50),
    }),
    defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.required().min(10).max(200),
    }),
    defineField({
      name: 'image',
      title: 'Image of the Restaurant',
      type: 'image',
    }),
    defineField({
      name: 'lat',
      title: 'Restaurant Latitude',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'long',
      title: 'Restaurant Longitude',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Restaurant Address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Enter a Rating from (1-5 Start)',
      type: 'number',
      validation: (Rule) =>
        Rule.required().min(1).max(5).error('Please enter a rating between 1 and 5'),
    }),
    defineField({
      name: 'type',
      title: 'Category',
      type: 'string',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{type: 'category'}],
    }),
    defineField({
      name: "dishes",
      title: "Dishes",
      type: "array",
      of: [{type: "reference", to: [{type: "dish"}]}],
    })
  ],
})
