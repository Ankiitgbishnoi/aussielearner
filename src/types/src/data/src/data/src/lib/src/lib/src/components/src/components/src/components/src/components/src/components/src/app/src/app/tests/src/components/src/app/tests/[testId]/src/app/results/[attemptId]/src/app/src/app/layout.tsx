import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aussie Learner | Australian Driver Test Practice",
  description:
    "Practise Australian driver knowledge tests, learn road rules and track your progress.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body>{children}</body>
    </html>
  );
}
