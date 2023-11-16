import { AppUid } from "@/const/AppUid"
import { ModelUid } from "@/const/ModelUid"
import { newtApiClient } from "@/libs/newt/newtApiClient"
import { ArticleResponse } from "@/libs/newt/types"

export const fetchTagList = async (): Promise<string[]> => {
  const { items } = await newtApiClient.getContents<ArticleResponse>({ appUid: AppUid, modelUid: ModelUid.ARTICLE })
  const flattenTags = items.flatMap(({ tags }) => tags)
  return [...new Set(flattenTags)]
}
