import Navbar from "@/components/Navbar"
import './globals.css'
import { Metadata } from "next"

// export const metadata = {
//   title: 'Next.js APP',
//   description: 'Curso de Jonmmircha YT Channel',
// }


export const metadata: Metadata = {
  title: {
    default: "Aprendiendo Next,js",
    absolute: "",
    template: "%s - Aprendiendo Next.js"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
        <Navbar />
        {children}</body>
    </html>
  )
}
