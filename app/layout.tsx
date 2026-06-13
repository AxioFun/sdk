import "./globals.css";

export const metadata = {
  title: "AXIO",
  description: "The Connective Fabric of the Autonomous Web"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
