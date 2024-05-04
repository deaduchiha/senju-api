import type { Metadata } from "next";
import { Tilt_Neon } from "next/font/google";
import { Providers } from "./providers";

export const tiltNeon = Tilt_Neon({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Senju",
  description: "free fake API",
  icons: {
    icon: "/senju.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={tiltNeon.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
