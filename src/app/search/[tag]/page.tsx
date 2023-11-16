import { SearchTagTemplate } from "@/components/templates/Search/Tag"
import { newtApiClient } from "@/libs/newt/newtApiClient"
import { AppUid } from "@/const/AppUid"
import { ModelUid } from "@/const/ModelUid"
import { ArticleResponse } from "@/libs/newt/types"
import { convertArticle } from "@/modules/convertToArticleList"
import { fetchTagList } from "@/modules/fetchTagList"

type Props = {
  params: {
    tag: string
  }
}

/* eslint-disable-next-line unicorn/prevent-abbreviations */
export const generateStaticParams = async () => {
  const tags = await fetchTagList()
  return tags.map((tag) => ({ tag }))
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
