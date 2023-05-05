import { ReactNode } from "react"
import "./globals.css"
import { Noto_Sans_JP } from "next/font/google"
import { OutSideContainer } from "@/components/layouts/OutSideContainer"
import { MainContainer } from "@/components/layouts/MainContainer"
import { SideBar } from "@/components/layouts/SideBar"
import { Header } from "@/components/layouts/Header"

const inter = Noto_Sans_JP({ subsets: ["latin"] })

// TODO: 最適化する
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body className={inter.className}>
      <OutSideContainer>
        <SideBar>広告領域</SideBar>
        <MainContainer>
          <Header />
          <main>{children}</main>
        </MainContainer>
        <SideBar>広告・プロフィールカード</SideBar>
      </OutSideContainer>
    </body>
  </html>
)

export default RootLayout
