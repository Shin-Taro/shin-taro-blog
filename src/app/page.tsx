import { HomeTemplate } from "@/components/templates/Home"
import { newtApiClient } from "@/libs/newt/newtApiClient"
import { ModelUid } from "@/const/ModelUid"
import { AppUid } from "@/const/AppUid"
import { ArticleResponse } from "@/libs/newt/types"
import { convertToArticleList } from "@/modules/convertToArticleList"

const HomePage = async () => {
  const response = await newtApiClient.getContents<ArticleResponse>({ appUid: AppUid, modelUid: ModelUid.ARTICLE })
  const convertedList = convertToArticleList(response.items)
  const dependencies = {
    articleListProps: {
      articles: convertedList,
    },
  }

  return <HomeTemplate {...dependencies} />
}

export default HomePage
