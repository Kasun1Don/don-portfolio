import type { Metadata } from "next";
import type { Person, WithContext } from "schema-dts";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Kasun L. Don | Full Stack AI Software Engineer",
  description:
    "Kasun L. Don, Full Stack AI Software Engineer at NGU AI, building AI software with Mastra and Inngest.",
  metadataBase: new URL("https://t0ken.dev"),
  openGraph: {
    title: "Kasun L. Don | Full Stack AI Software Engineer",
    description:
      "Kasun L. Don, Full Stack AI Software Engineer at NGU AI, building AI software with Mastra and Inngest.",
    type: "website",
  },
};

const jsonLd: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kasun L. Don",
  jobTitle: "Full Stack AI Software Engineer",
  description:
    "Full Stack AI Software Engineer at NGU AI, building AI software with Mastra and Inngest.",
  worksFor: {
    "@type": "Organization",
    name: "NGU AI",
    url: "https://github.com/NGU-AI",
  },
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
    "Inngest",
    "Hermes Agent",
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
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
