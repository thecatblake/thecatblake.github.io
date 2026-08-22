import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
	}),
});

const study = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/study" }),
	schema: z.object({
		title: z.string(),
		url: z.string(),
		period: z.string(),
		date: z.coerce.date(),
	}),
});

export const collections = { blog, study };
