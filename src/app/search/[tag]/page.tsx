import { SearchTagTemplate } from "@/components/templates/Search/Tag"
import { newtApiClient } from "@/libs/newt/newtApiClient"
import { AppUid } from "@/const/AppUid"
import { ModelUid } from "@/const/ModelUid"
import { ArticleResponse } from "@/libs/newt/types"
import { convertArticle } from "@/modules/convertToArticleList"

type Props = {
  params: {
    tag: string
  }
}

/* eslint-disable-next-line unicorn/prevent-abbreviations */
export const generateStaticParams = async () => {
  const { items } = await newtApiClient.getContents<ArticleResponse>({ appUid: AppUid, modelUid: ModelUid.ARTICLE })
  const flattenTags = items.flatMap(({ tags }) => tags)
  const uniqueTags = [...new Set(flattenTags)]
  return uniqueTags.map((tag) => ({ params: { tag } }))
}

const SearchTagPage = async (props: Props) => {
  const {
    params: { tag },
  } = props
  const query = {
    tags: [tag],
  }
  const { items, total } = await newtApiClient.getContents<ArticleResponse>({ appUid: AppUid, modelUid: ModelUid.ARTICLE, query })
  const convertedList = items.map(convertArticle)
  const dependencies = {
    tag,
    total,
    articleListProps: {
      articles: convertedList,
    },
  }

  return <SearchTagTemplate {...dependencies} />
}

export default SearchTagPage
