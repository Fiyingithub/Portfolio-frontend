import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Adegbenga Oluwatosin | Frontend Developer",
    short_name: "Adegbenga Oluwatosin",
    description:
      "Adegbenga Oluwatosin -   Frontend Developer",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/",
        sizes: "64x64",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "ai",
      "software engineering",
      "machine learning",
      "developer",
      "web development",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
