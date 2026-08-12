import { MetadataRoute } from "next";


export default function robots(): MetadataRoute.Robots {
    const baseUrls = [
        "https://sorting-algorithms-simulator.vercel.app",
        "https://algosortify.vercel.app",
    ];

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
        sitemap: `${baseUrls}/sitemap.xml`,
    }
}