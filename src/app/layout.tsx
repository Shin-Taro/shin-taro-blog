import { ReactNode, Suspense } from "react"
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
import { Metadata } from "next"
import { MetaDataBase } from "@/const/MetadataBase"

const inter = Noto_Sans_JP({ subsets: ["latin"] })

const description = "shin-taroの技術ブログです。Webフロントエンド関連が多めです。"

export const metadata: Metadata = {
  ...MetaDataBase,
  description,
  openGraph: {
    ...MetaDataBase.openGraph,
    description,
  },
  twitter: {
    ...MetaDataBase.twitter,
    description,
  },
}

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="ja">
    <head>
      {/* eslint-disable-next-line unicorn/no-null */}
      <Suspense fallback={null}>
        <GATracking />
      </Suspense>
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
