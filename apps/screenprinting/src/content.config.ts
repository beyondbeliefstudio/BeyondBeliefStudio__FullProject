import { glob, file } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const reviews = defineCollection({
  loader: file("src/data/reviews.json"),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      stars: z.string(),
      company: z.string(),
      description: z.string(),
      isFeatured: z.boolean(),
    }),
});

const heroCards = defineCollection({
  loader: file("src/data/heroCards.json"),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      imageAlt: z.string(),
      isFeatured: z.boolean(),
    }),
});

const orderingProcess = defineCollection({
  loader: file("src/data/orderingProcess.json"),
  schema: ({ image }) =>
    z.object({
      data: z.string(),
      title: z.string(),
      description: z.string(),
      image: image(),
      imageAlt: z.string(),
      active: z.string(),
    }),
});

const servicesFAQ = defineCollection({
  loader: file("src/data/servicesFAQ.json"),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    tag: z.string(),
  }),
});

const aboutFAQ = defineCollection({
  loader: file("src/data/aboutFAQ.json"),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    tag: z.string(),
  }),
});

const quoteFAQ = defineCollection({
  loader: file("src/data/quoteFAQ.json"),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    tag: z.string(),
  }),
});

const team = defineCollection({
  loader: file("src/data/team.json"),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      position: z.string(),
      image: image(),
      imageAlt: z.string(),
    }),
});

const popularProducts = defineCollection({
  loader: file("src/data/popularProducts.json"),
  schema: ({ image }) =>
    z.object({
      id: z.number(),
      itemNumber: z.string(),
      itemName: z.string(),
      itemBrand: z.string(),
      itemImage: z.string().url(),
      itemPrice: z.number(),
      itemCategory: z.string(),
      itemQuality: z.string(),
      itemURL: z.string().optional(),
    }),
});

const garmentQualityOptions = defineCollection({
  loader: file("src/data/quoteCalculator/garmentQualityOptions.json"),
  schema: z.object({
    value: z.string(),
    label: z.string(),
  }),
});

const setupFees = defineCollection({
  loader: file("src/data/quoteCalculator/setupFees.json"),
  schema: z.object({
    colorCount: z.number(),
    price: z.number(),
  }),
});

const printPrices = defineCollection({
  loader: file("src/data/quoteCalculator/printPrices.json"),
  schema: z.object({
    minCount: z.number(),
    maxCount: z.number(),
    pricePerColor: z.array(z.number()),
  }),
});

const garmentOptions = defineCollection({
  loader: file("src/data/quoteCalculator/garmentOptions.json"),
  schema: z.object({
    value: z.string(),
    label: z.string(),
    avgPriceBasic: z.number(),
    avgPriceMidRange: z.number(),
    avgPricePremium: z.number(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "src/content/blog/**/*.md" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      description: z.string(),
      author: z.string(),
      heroImage: image(),
      imageAlt: z.string(),
      pubDate: z.date(),
      isDraft: z.boolean().optional(),
      tags: z.array(z.string()).optional(),
    }),
});


export const collections = {
  reviews,
  heroCards,
  orderingProcess,
  servicesFAQ,
  team,
  aboutFAQ,
  popularProducts,
  garmentQualityOptions,
  setupFees,
  printPrices,
  garmentOptions,
  quoteFAQ,
  blog,
};
