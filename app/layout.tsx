import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PetMouth — Higiene bucal canina sem trauma",
  description:
    "O método que veterinários recomendam para escovar os dentes do seu cão sem briga. Material gratuito + diagnóstico em 30 segundos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
