"use client";

import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { useReducer } from "react";
import ComponentThemeContext from "../../context/ComponentThemeContext";
import ComponentThemeContextReducer from "../../reducers/ComponentThemeContextReducer";
import initialState from "../../utils/InitialState";
import "./globals.css";

const rubik = Rubik({ weight: "300", style: "normal", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modern Component Library",
  description: "A modern component library for React",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(
    ComponentThemeContextReducer,
    initialState
  );

  return (
    <ComponentThemeContext.Provider value={{ state, dispatch }}>
      <html lang="en">
        <body className={rubik.className}>{children}</body>
      </html>
    </ComponentThemeContext.Provider>
  );
}
