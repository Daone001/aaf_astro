import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders'; // For Astro 5.0+
import { z } from 'astro/zod';

const members = defineCollection({
  // Point to your folder: src/content/members/
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/members" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
	picture: z.string().optional(),
	excerpt: z.string(),
	date: z.date(),
	profile_title: z.string(),
  }),
});

const articles = defineCollection({
  // Point to your folder: src/content/members/
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/articles" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
	pdf: z.string().optional(),
	excerpt: z.string(),
	date: z.date(),
	author: z.string(),
  }),
});

export const collections = { members, articles };