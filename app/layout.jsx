"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "@/theme/index";
import "./global.scss";
import "focus-visible/dist/focus-visible";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <CacheProvider>
          <ChakraProvider resetCSS theme={customTheme}>
            {children}
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
