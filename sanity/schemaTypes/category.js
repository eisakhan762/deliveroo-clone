import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
      description: 'Title of the category',
    }),
    defineField({
      name: 'image',
      title: 'Category Icon',
      type: 'image',
      validation: Rule => Rule.required(),
    }),
  ],
})
