import { Metadata } from "next"

const url = "https://blog.shin-taro.info"

export const siteName = "shin-taro/blog"

export const MetaDataBase: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === "production" ? url : "http://localhost:3000"),
  openGraph: {
    title: {
      default: siteName,
      template: `%s | ${siteName}`,
    },
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
    site: "@shin_taro_dev",
    creator: "@shin_taro_dev",
  },
}
