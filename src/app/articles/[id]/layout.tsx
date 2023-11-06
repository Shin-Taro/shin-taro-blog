import { AppUid } from "@/const/AppUid"
import { MetaDataBase } from "@/const/MetadataBase"
import { ModelUid } from "@/const/ModelUid"
import { newtApiClient } from "@/libs/newt/newtApiClient"
import { ArticleResponse } from "@/libs/newt/types"
import { Metadata } from "next"
import { ReactNode } from "react"

type Props = {
  params: {
    id: string
  }
}

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const {
    params: { id },
  } = props

  const { title, excerpt } = await newtApiClient.getContent<ArticleResponse>({ appUid: AppUid, modelUid: ModelUid.ARTICLE, contentId: id })

  return {
    title,
    description: excerpt,
    openGraph: {
      ...MetaDataBase.openGraph,
      title,
      description: excerpt,
      images: [
        {
          url: "/opengraph-image.jpg",
          width: 300,
          height: 300,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      ...MetaDataBase.twitter,
      title,
      description: excerpt,
    },
  }
}

const PageLayout = ({ children }: { children: ReactNode }) => children
export default PageLayout
