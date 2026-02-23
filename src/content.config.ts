import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const software = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/software' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    price: z.string(),
    url: z.string().url(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    platform: z.array(z.string()).default([]),
    highlight: z.string().default(''),
    addedAt: z.string().default(''),
  }),
});

export const collections = { software };
