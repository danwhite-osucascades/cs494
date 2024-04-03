import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dan's Cool Website",
  description: "Hey guys this website is cool!!!",
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
