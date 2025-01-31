import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/sanity/lib/client'

// import { client } from './sanity.client' // your sanity client

const builder = imageUrlBuilder(client)

export function urlFor(source) {
    return builder.image(source)
}