import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hippo Health — Precision AI & Clinical Healthcare Platform",
  description:
    "AI Medical Chatbot, Doctor-Verified Recommendations, Smartwatch Sync, 3D Anatomy Visualization & Advanced Clinical AI Diagnostics.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased scroll-smooth"
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.cdnfonts.com/css/google-sans"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F6F4EF] text-[#1C1B18] font-sans selection:bg-[#F4E071] selection:text-[#1C1B18]">
        {children}
      </body>
    </html>
  );
}
