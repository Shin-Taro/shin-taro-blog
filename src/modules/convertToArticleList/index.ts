import { ArticleResponse } from "@/libs/newt/types"
import { Article } from "@/models/Article"
import { formatDate } from "../formatDate"

type ConvertArticle = (response: ArticleResponse) => Article

export const convertArticle: ConvertArticle = (response) => {
  const { title, body, _sys, _id, excerpt, tags } = response
  return {
    title,
    body,
    excerpt,
    tags,
    id: _id,
    createDate: formatDate(_sys.raw.firstPublishedAt),
  }
}
