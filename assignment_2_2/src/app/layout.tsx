import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assignment_2_2",
  description: "In Class Demonstration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
