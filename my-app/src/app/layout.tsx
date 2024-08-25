import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";
import { Anek_Telugu } from "next/font/google";
import "./globals.css";

const AnekTelugu = Anek_Telugu({
   subsets: ["latin"],
   variable: "--font-caption",
});

export const metadata: Metadata = {
   title: "Guillaume Zimmer - Full Stack Developer",
   description:
      "Full Stack Developer Portfolio - Comprehensive showcase of expertise in end-to-end web development. Discover a wide array of projects demonstrating mastery in HTML, CSS, JavaScript, Java, and more. Gain insight into experience with React, Angular, Node.js, Django, Ruby on Rails, and other frameworks. Explore completed projects, each with detailed descriptions, showcasing the ability to solve complex problems and implement effective solutions. Witness proficiency in working with APIs, managing servers, and understanding version control systems like Git. This portfolio reflects a Full Stack Developer's adaptability, dedication to continuous learning, and commitment to delivering high-quality, innovative web solutions.",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" className="h-full">
         <body
            className={cn(
               GeistSans.variable,
               GeistMono.variable,
               AnekTelugu.variable,
               "font-sans h-full bg-backround text-foreground"
            )}>
            {children}
         </body>
      </html>
   );
}