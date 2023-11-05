import { Metadata } from "next"
import { ReactNode } from "react"

type Props = {
  params: {
    tag: string
  }
}

export const generateMetadata = (props: Props): Metadata => {
  const {
    params: { tag },
  } = props

  const title = `「${tag}」に関する記事の一覧`
  const description = `${tag}に関連のあるshin-taroの技術記事の一覧ページです。`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    twitter: {
      title,
      description,
    },
  }
}

const PageLayout = ({ children }: { children: ReactNode }) => children
export default PageLayout
