import { createClient, type ClientConfig } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

const config: ClientConfig = {
  projectId: "p4fiyzqa",
  dataset: "production",
  useCdn: false, // set to `false` to bypass the edge cache
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
}

export const client = createClient(config)

const builder = imageUrlBuilder(client)

export const getImage = (image: object) => {
  return builder.image(image).url()
}
