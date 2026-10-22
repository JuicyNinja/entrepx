export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/book/confirmed", "/command"] },
    sitemap: "https://www.entrepx.com/sitemap.xml",
  };
}
