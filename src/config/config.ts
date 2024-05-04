import { defineCollection, z } from 'astro:content'
import { CATEGORIES } from '../data/categories'

const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      metaTitle: z.string().max(80).optional(),
      metaDescription: z
        .string()
        .max(
          160,
          'For optimze SEO, please provide a excerpt/description with 160 characters or less',
        )
        .optional(),
      title: z.string(),
      description: z.string().optional(),
      author: z.string().default('Hrihorii Ilin').optional(),
      language: z.enum(['en', 'es', 'uk', 'ru', 'de', 'fr']).optional(),
      // Transform string to Date object
      pubDate: z
        .string()
        .or(z.date())
        .transform(val => new Date(val)),
      updatedDate: z.coerce.date().optional(),
      heroImage: image(),
      category: z.enum(CATEGORIES).optional(),
      tags: z.array(z.string()).optional(),
    }),
})

const docs = defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      language: z.enum(['en', 'es', 'uk', 'ru', 'de', 'fr']).optional(),
    }),
  });

  const guides = defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      published: z.boolean().default(true),
      featured: z.boolean().default(false),
      language: z.enum(['en', 'es', 'uk', 'ru', 'de', 'fr']).optional(),
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
    }),
  });

  const clientsCollection = defineCollection({ type: 'content',
  schema: () => z.object({
    title: z.string().max(60, "For optimze SEO, please provide a title with 60 characters or less"),
    excerpt: z.string().max(160, "For optimze SEO, please provide a excerpt/description with 160 characters or less"),
    date: z.date(),
  }),
})


export const collections = { blog: blogCollection, clients: clientsCollection, docs, guides }

