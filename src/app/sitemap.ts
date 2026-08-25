import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const SITE = `https://eldeeb21.github.io${process.env.NEXT_PUBLIC_BASE_PATH || ""}`

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/cv", "/ai-journey"].map((path) => ({
    url: `${SITE}${path}`,
    lastModified: new Date(),
  }))
}
