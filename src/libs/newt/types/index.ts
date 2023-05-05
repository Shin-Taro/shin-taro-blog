import { Content } from "newt-client-js"

export interface ArticleResponse extends Content {
  title: string
  body: string
  tags: string[]
}
