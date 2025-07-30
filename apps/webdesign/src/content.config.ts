import { glob, file } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const webdesignFAQ = defineCollection({
  loader: file("src/data/webdesignFAQ.json"),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    tag: z.string(),
  }),
});

const recentProjects = defineCollection({
  loader: file("src/data/recentProjects.json"),
  schema: ({ image }) =>
    z.object({
      data: z.string(),
      projectTitle: z.string(),
      projectDescription: z.string(),
      image: image(),
      imageAlt: z.string(),
      active: z.string(),
    }),
});

export const collections = {
  webdesignFAQ: webdesignFAQ,
  recentProjects: recentProjects,
};
