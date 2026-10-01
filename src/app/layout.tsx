import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteMotion } from "@/components/SiteMotion";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
});

export const metadata: Metadata = {
  title: {
    default: "Unisinos em São Leopoldo",
    template: "%s | Unisinos São Leopoldo",
  },
  description:
    "Site independente sobre a Unisinos em São Leopoldo e o uso de inteligência artificial.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${sourceSans.variable} ${sourceSerif.variable} antialiased`}>
        <SiteMotion>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </SiteMotion>
      </body>
    </html>
  );
}
