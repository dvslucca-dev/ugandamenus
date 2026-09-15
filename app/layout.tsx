import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UgandanMenus | Smart QR Code Menus for Restaurants & Bars in Uganda",
  description:
    "Uganda's #1 digital menu platform. Host your restaurant or bar menu online with QR codes. Customers scan and instantly view your mobile-optimized menu. Affordable pricing from UGX 100,000.",
  keywords: [
    "QR code menu Uganda",
    "digital menu Uganda",
    "restaurant menu QR code",
    "bar menu online Uganda",
    "Kampala restaurant menu",
    "Ugandan restaurant digital menu",
    "QR menu service Uganda",
    "mobile menu Uganda",
    "contactless menu Uganda",
    "restaurant technology Uganda",
  ],
  metadataBase: new URL("https://ugandanmenus.com"),
  alternates: {
    canonical: "https://ugandanmenus.com",
  },
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: "https://ugandanmenus.com",
    siteName: "UgandanMenus",
    title: "UgandanMenus | Smart QR Code Menus for Restaurants & Bars in Uganda",
    description:
      "Uganda's #1 digital menu platform. Host your restaurant or bar menu online with QR codes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
