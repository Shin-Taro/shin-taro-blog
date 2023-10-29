import { HomeTemplate } from "@/components/templates/Home"
import { newtApiClient } from "@/libs/newt/newtApiClient"
import { ModelUid } from "@/const/ModelUid"
import { AppUid } from "@/const/AppUid"
import { ArticleResponse } from "@/libs/newt/types"
import { convertArticle } from "@/modules/convertToArticleList"

const HomePage = async () => {
  const { items } = await newtApiClient.getContents<ArticleResponse>({ appUid: AppUid, modelUid: ModelUid.ARTICLE })
  const convertedList = items.map(convertArticle)
  const dependencies = {
    articleListProps: {
      articles: convertedList,
    },
  }

  return <HomeTemplate {...dependencies} />
}

export default HomePage
