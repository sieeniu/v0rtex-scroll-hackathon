import { Montserrat } from "next/font/google";

export const montserratFont = Montserrat({
  weight: ["400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin", "latin-ext"],
  variable: "--font-montserrat",
});

export const systemFonts = `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif`;
