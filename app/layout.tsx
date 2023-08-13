import Header from "./components/Header"
import SideBar from "./components/SideBar"
import "./globals.css"
import type { Metadata } from "next"
import { Providers } from "./provider"
export const metadata: Metadata = {
  title: "E-Commerce",
  description: "An e-commerce web",
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="dark" lang="en">
      <body>
        <Header />
        <SideBar />
        <div className="p-4 sm:ml-64 mt-14">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  )
}
