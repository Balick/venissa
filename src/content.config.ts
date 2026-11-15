import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
const entry = z.object({
  title: z.string().min(1),
  summary: z.string().min(1),
  category: z.string().min(1),
  order: z.number().int(),
});
export const collections = {
  projects: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: entry.extend({ image: z.string(), alt: z.string().min(1) }),
  }),
  journal: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/journal" }),
    schema: entry,
  }),
};
