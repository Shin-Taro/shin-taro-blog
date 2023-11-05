import { ReactNode } from "react"
import "@/styles/globals.css"
import { Noto_Sans_JP } from "next/font/google"
import { OutSideContainer } from "@/components/layouts/OutSideContainer"
import { MainContainer } from "@/components/layouts/MainContainer"
import { SideBar } from "@/components/layouts/SideBar"
import { Header } from "@/components/layouts/Header"
import { Profile } from "@/components/elements/Profile"
import { Main } from "@/components/layouts/Main"
import { GATracking } from "@/components/features/GATracker"
import { Footer } from "@/components/layouts/Footer"

const inter = Noto_Sans_JP({ subsets: ["latin"] })

const siteName = "shin-taro/blog"
const description = "shin-taroの技術ブログです。Webフロントエンド関連が多めです。"
const url = "https://blog.shin-taro.info"

export const metadata = {
  metadataBase: new URL(process.env.NODE_ENV === "production" ? url : "http://localhost:3000"),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description,
  openGraph: {
    title: {
      default: siteName,
      template: `%s | ${siteName}`,
    },
    description,
    url,
    siteName,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: {
      default: siteName,
      template: `%s | ${siteName}`,
    },
    description,
    site: "@shin_taro_dev",
    creator: "@shin_taro_dev",
  },
}

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="ja">
    <head>
      <GATracking />
    </head>
    <body className={inter.className}>
      <OutSideContainer>
        <SideBar />
        <MainContainer>
          <Header />
          <Main>{children}</Main>
        </MainContainer>
        <SideBar>
          <div className="mt-[130px] flex justify-center">
            <Profile />
          </div>
        </SideBar>
      </OutSideContainer>
      <Footer />
    </body>
  </html>
)

export default RootLayout
