import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const cities = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/cities" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    city: z.string(),
    country: z.string(),
    region: z.string(),
    heroImage: z.string(),
    cityWriteup: z.string(),
    artwork: z.object({
      title: z.string(),
      artist: z.string(),
      imageUrl: z.string(),
      writeup: z.string(),
    }),
    food: z.object({
      name: z.string(),
      imageUrl: z.string(),
      writeup: z.string(),
    }),
    song: z.object({
      title: z.string(),
      artist: z.string(),
      youtubeUrl: z.string(),
    }),
  })
});

export const collections = { cities };