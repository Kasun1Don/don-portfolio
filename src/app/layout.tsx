import type { Metadata } from "next";
import type { Person, WithContext } from "schema-dts";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Kasun L. Don",
  description: "Kasun L. Don AI software engineer portfolio.",
  openGraph: {
    title: "Kasun L. Don Portfolio",
    description: "Kasun L. Don AI software engineering portfolio.",
    type: "website",
  },
};

const jsonLd: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kasun L. Don",
  jobTitle: "Full Stack Software Engineer",
  description: "Kasun L. Don AI software engineer portfolio.",
  sameAs: [
    "https://github.com/Kasun1Don",
    "https://www.linkedin.com/in/kasun-ldon/",
  ],
  knowsAbout: [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "AI Workflows",
    "Mastra AI",
    "tRPC",
    "Web3",
    "Blockchain",
    "PostgreSQL",
    "MongoDB",
    "Docker",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        GeistSans.variable,
        GeistMono.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider attribute="class" forcedTheme="dark">
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
