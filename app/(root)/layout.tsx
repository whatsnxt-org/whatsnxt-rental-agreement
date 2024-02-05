import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });
const rubic = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${rubic.className}`}>
        <div className="min-h-screen bg-wnr-purple/5">{children}</div>
      </body>
    </html>
  );
}
