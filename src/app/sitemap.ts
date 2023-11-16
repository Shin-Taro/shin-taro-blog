import { AppUid } from "@/const/AppUid"
import { ModelUid } from "@/const/ModelUid"
import { newtApiClient } from "@/libs/newt/newtApiClient"
import { ArticleResponse } from "@/libs/newt/types"
import { fetchTagList } from "@/modules/fetchTagList"
import { MetadataRoute } from "next"

const staticPages: MetadataRoute.Sitemap = [
  {
    url: "https://blog.shin-taro.info/",
    lastModified: new Date(),
  },
]

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const articles = await newtApiClient
    .getContents<ArticleResponse>({ appUid: AppUid, modelUid: ModelUid.ARTICLE })
    .then((data) => data.items.map(({ _id }) => _id))
  const articlePages = articles.map((article) => ({
    url: `https://blog.shin-taro.info/articles/${article}`,
    lastModified: new Date(),
  }))

  const tags = await fetchTagList()
  const tagPages = tags.map((tag) => ({
    url: `https://blog.shin-taro.info/search/${tag}`,
    lastModified: new Date(),
  }))

  return [...staticPages, ...articlePages, ...tagPages]
}

export default sitemap
