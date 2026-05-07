import { client } from '@/lib/sanity'

export async function getEpisodes(limit = 10) {
  return client.fetch(
    `*[_type == "episode"] | order(publishedAt desc)[0...$limit] {
      _id, number, title, description, duration, ivooxUrl, publishedAt, section,
      "imageUrl": image.asset->url
    }`,
    { limit }
  )
}

export async function getExpedientes(limit = 6) {
  return client.fetch(
    `*[_type == "expediente"] | order(number asc)[0...$limit] {
      _id, number, title, slug, excerpt, category, publishedAt,
      "imageUrl": image.asset->url
    }`,
    { limit }
  )
}

export async function getEventos() {
  return client.fetch(
    `*[_type == "evento"] | order(date asc) {
      _id, title, description, date, location, ticketsUrl, sold_out,
      "imageUrl": image.asset->url
    }`
  )
}
