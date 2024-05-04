import { defineCollection, z } from 'astro:content';
import { astroZodCollectionsToJsonSchemas } from 'astro-zod-to-json-schema';

// Typescript validation for the Blog Content
const blogCollection = defineCollection({
  schema: ({ image }) => z.object({
	id: z.string().min(1).max(1000),
    metaTitle: z.string().max(60, "For optimze SEO, please provide a title with 60 characters or less").optional(),
    metaDescription: z.string().max(160, "For optimze SEO, please provide a excerpt/description with 160 characters or less").optional(),
    title: z.string(),
    description: z.string().optional(),
	pubDate: z.coerce.date(),
	updatedDate: z.coerce.date().optional(),
	language: z.enum(['en', 'es', 'uk', 'ru', 'de', 'fr']).optional(),
	draft: z.boolean().default(false),
    authors: z.array(z.string()).default(['Admin']),
    categories: z.array(z.string()),
    reference: z.string().optional(),
    previewImage: z.string().optional(),
    secret: z.boolean().default(false),
    tags: z.array(z.string()).default(['other']),
    canonicalURL: z.string().optional(),
    image: image(),
    imageAlt: z.string().optional(),
	topics: z.array(z.string()).default(['New!']), // the same as the filename without the extension
  }), 
})

  // Typescript validation for the Client Content
  const clientsCollection = defineCollection({
    type: 'content',
    schema: () => z.object({
      title: z.string().max(60, "For optimze SEO, please provide a title with 60 characters or less"),
      excerpt: z.string().max(160, "For optimze SEO, please provide a excerpt/description with 160 characters or less"),
	  language: z.enum(['en', 'es', 'uk', 'ru', 'de', 'fr']).optional(),
      date: z.date(),
    }),
  })

  const members = defineCollection({
    type: 'content',
    schema: z.object({
      name: z.string(),
      title: z.string(),
      founder: z.boolean().default(false),
      apdi: z.string().optional(),
      photo: z.object({
        url: z.string(),
        thumbnail: z.string().optional(),
        alt: z.string().default('photo of APDI member')
      }),
      email: z.string().email(),
      linkedin: z.string().url(),
      twitter: z.string().url().optional(),
      instagram: z.string().url().optional(),
      facebook: z.string().url().optional(),
      dla: z.enum(["2021", "2022", "2023"]),
      stream: z.string(),
      skills: z.array(z.string()),
	  language: z.enum(['en', 'es', 'uk', 'ru', 'de', 'fr']).optional(),
    })
  })

  const topic = defineCollection({
	schema: z.object({
	  title: z.string(),
	  language: z.enum(['en', 'es', 'uk', 'ru', 'de', 'fr']).optional(),
	}),
  });

  const author = defineCollection({
	schema: ({ image }) =>
	  z.object({
		firstname: z.string(),
		lastname: z.string(),
		language: z.enum(['en', 'es', 'uk', 'ru', 'de', 'fr']).optional(),
		avatar: image().refine((img) => img.width >= 96, {
		  message: "Author avatar image must be at least 96 pixels wide!",
		}),
		// socials
		twitter: z.string().optional(),
		github: z.string().optional(),
		linkedin: z.string().optional(),
	  }),
  });

export const collections = {
  blog: blogCollection,
  clients: clientsCollection,
  members,
  author,
  topic
};

await astroZodCollectionsToJsonSchemas(collections);