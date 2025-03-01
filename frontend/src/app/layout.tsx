import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jetlag Dallas",
  description: "A stylish, niche-driven online clothing store catering towards a variety of Gen Z aesthetics — frats, grunge, sleek, coffeeshop-esque vibes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        
      >
        <style>
@import url(&#39;https://fonts.googleapis.com/css2?family=Barrio&family=Roboto:ital,wght@0,100..900;1,100..900&family=UnifrakturCook:wght@700&family=Zain:ital,wght@0,200;0,300;0,400;0,700;0,800;0,900;1,300;1,400&display=swap&#39;);
</style>
        {children}
      </body>
    </html>
  );
}
