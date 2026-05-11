import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    context: z.string(),
    role: z.string(),
    focus: z.string(),
    order: z.number(),
  }),
});

export const collections = { projects };
