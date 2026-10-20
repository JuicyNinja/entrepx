import "./globals.css";
import "./site.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: { default: "EntrepX | The Franchise Alternative", template: "%s | EntrepX" },
  description:
    "A fractional leadership team, all your tech and a partner network, built around a business you own and can grow, pass on or sell. No royalties. $1,500/mo flat.",
};

export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700;800;900&family=Barlow+Condensed:wght@600;700&family=Barlow:wght@400;500;600&display=swap"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
