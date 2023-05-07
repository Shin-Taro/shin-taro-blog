import { ArticleResponse } from "@/libs/newt/types"
import { Article } from "@/models/Article"
import { formatDate } from "../formatDate"

type ConvertToArticleList = (response: ArticleResponse[]) => Article[]

export const convertToArticleList: ConvertToArticleList = (response) =>
  response.map((article) => {
    const { title, body, _sys, _id, excerpt, tags } = article
    return {
      title,
      body,
      excerpt,
      tags,
      id: _id,
      createDate: formatDate(_sys.raw.firstPublishedAt),
    }
  })
