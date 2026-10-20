export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/book/confirmed"] },
    sitemap: "https://www.entrepx.com/sitemap.xml",
  };
}
