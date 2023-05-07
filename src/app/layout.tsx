import { ReactNode } from "react"
import "@/styles/globals.css"
import { Noto_Sans_JP } from "next/font/google"
import { OutSideContainer } from "@/components/layouts/OutSideContainer"
import { MainContainer } from "@/components/layouts/MainContainer"
import { SideBar } from "@/components/layouts/SideBar"
import { Header } from "@/components/layouts/Header"
import { Profile } from "@/components/elements/Profile"
import { Main } from "@/components/layouts/Main"

const inter = Noto_Sans_JP({ subsets: ["latin"] })

export const metadata = {
  title: {
    default: "shin-taro/blog",
    template:"%s | shin-taro/blog"
  },
  description: "shin-taroの技術ブログです。Webフロントエンド関連が多めです。",
  icons: {
    icon: "/favicon.ico",
  },
}

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="ja">
    <body className={inter.className}>
      <OutSideContainer>
        <SideBar />
        <MainContainer>
          <Header />
          <Main>{children}</Main>
        </MainContainer>
        <SideBar>
          <div className="mt-[100px] flex justify-center">
            <Profile />
          </div>
        </SideBar>
      </OutSideContainer>
    </body>
  </html>
)

export default RootLayout
