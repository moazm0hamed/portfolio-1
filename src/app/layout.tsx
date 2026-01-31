import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/context/Providers";

export const metadata: Metadata = {
  title: "Moaz Mohamed | Front-End Developer",
  description: "Portfolio of Moaz Mohamed, a professional Front-End Developer building modern, high-performance web interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers attribute="data-theme" defaultTheme="dark" enableSystem>
          {children}
        </Providers>
      </body>
    </html>
  );
}
