import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KnusWonen - Duurzame woningen voor iedereen",
  description: "Bij KnusWonen zetten we ons in om energiezuinige woningen te ontwikkelen die bijdragen aan een duurzame toekomst. Ontdek onze duurzame woningoplossingen.",
  keywords: ["duurzame woningen", "energiezuinig", "KnusWonen", "woningbouw", "sustainability", "eco-friendly homes"],
  authors: [{ name: "KnusWonen" }],
  creator: "KnusWonen",
  publisher: "KnusWonen",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://knuswonen.nl",
    siteName: "KnusWonen",
    title: "KnusWonen - Duurzame woningen voor iedereen",
    description: "Bij KnusWonen zetten we ons in om energiezuinige woningen te ontwikkelen die bijdragen aan een duurzame toekomst.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KnusWonen - Duurzame woningen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KnusWonen - Duurzame woningen voor iedereen",
    description: "Bij KnusWonen zetten we ons in om energiezuinige woningen te ontwikkelen die bijdragen aan een duurzame toekomst.",
    images: ["/og-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#4F46E5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
