"use client";

import { ThemeProvider } from "next-themes";
import { Theme } from "@radix-ui/themes";

export const Providers = ({ children }) => (
  <ThemeProvider attribute="class">
    <Theme id="root" accentColor="gold" appearance="light">
      {children}
    </Theme>
  </ThemeProvider>
);
