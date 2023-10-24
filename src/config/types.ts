import * as z from "zod";

const languageSchema = z.object({
  default: z.string(),
  debug: z.boolean(),
});

const blipSchema = z.object({
  url: z.string().url(),
  portalIdentityUri: z.string().url(),
  domain: z.string(),
});

const apiSchema = z.object({
  url: z.string().url(),
  key: z.string(),
});

const segmentSchema = z.object({
  prefix: z.string(),
});

const bucketSchema = z.object({
  key: z.string(),
});

const dateTimeSchema = z.object({
  default: z.string(),
  time: z.string(),
  date: z.string(),
});

const settingsSchema = z.object({
  env: z.string(),
  language: languageSchema,
  blip: blipSchema,
  api: apiSchema,
  segment: segmentSchema,
  bucket: bucketSchema,
  datetime: dateTimeSchema,
  defaultExtensionImage: z.string(),
  repositoryUrl: z.string(),
});

export type Settings = z.infer<typeof settingsSchema>;

export default settingsSchema;
