import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.title,
    short_name: site.shortName,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0b0c0f",
    theme_color: "#0b0c0f",
    icons: [
      {
        src: "/brand/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/brand/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
