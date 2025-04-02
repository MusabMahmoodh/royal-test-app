import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Royal Academy of Science",
  description: "PRemier institution for the study of science",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
