import  { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
  projectId: "7xa6jtqk",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-10-21",
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)

export default client;