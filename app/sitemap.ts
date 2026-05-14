import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://prakashagrahari.dev",
      lastModified: new Date()
    }
  ];
}
