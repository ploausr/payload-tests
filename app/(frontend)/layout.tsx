import React from "react";
import "./globals.css";

export const metadata = {
  description: "WBCS Commercial",
  title: "WBCS Commercial",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="pt-BR">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
