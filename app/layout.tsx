import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"GiftExchange",description:"Make gifting together simple, personal, and fun."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}