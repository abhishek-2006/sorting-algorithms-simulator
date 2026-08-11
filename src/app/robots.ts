import { MetadataRoute } from "next";


export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://sorting-algorithms-simulator.vercel.app";

    return{
        rules: [
            {
                userAgent: "Googlebot",
                allow: "/",
                disallow: "/api",
            },
            {
                userAgent: "Bingbot",
                allow: "/",
                disallow: "/api",
            },
            {
                userAgent: "*",
                allow: "/",
                disallow: "/api",
            }
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}