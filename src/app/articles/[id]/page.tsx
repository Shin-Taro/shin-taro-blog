import { ArticleTemplate } from "@/components/templates/Articles/Id"
import { newtApiClient } from "@/libs/newt/newtApiClient"
import { ArticleResponse } from "@/libs/newt/types"
import { AppUid } from "@/const/AppUid"
import { ModelUid } from "@/const/ModelUid"
import { convertArticle } from "@/modules/convertToArticleList"

type Props = {
  params: {
    id: string
  }
}

const ArticlePage = async (props: Props) => {
  const {
    params: { id },
  } = props
  const response = await newtApiClient.getContent<ArticleResponse>({ appUid: AppUid, modelUid: ModelUid.ARTICLE, contentId: id })
  const article = convertArticle(response)

  return <ArticleTemplate {...article} />
}

export default ArticlePage
