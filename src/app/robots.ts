import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const SITE = `https://eldeeb21.github.io${process.env.NEXT_PUBLIC_BASE_PATH || ""}`

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE}/sitemap.xml`,
  }
}
