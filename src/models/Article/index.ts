import { ArticleResponse } from "@/libs/newt/types"

export type Article = Omit<ArticleResponse, "_id" | "_sys"> & {
  createDate: string
  id: string
}
