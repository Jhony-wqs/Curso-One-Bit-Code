import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import localFont from "next/font/local"

import "./globals.scss"

const roboto1 = localFont({
  src: "./fonts/Roboto-Condensed.ttf",
  variable: "--font-roboto-1",
  weight: "400 700"
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${roboto1.variable} `} >
        <Theme appearance="dark">

        {children}

        </Theme>
      </body>
    </html>
  );
}
