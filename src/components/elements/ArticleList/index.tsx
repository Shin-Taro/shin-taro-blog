import { Article } from "@/models/Article"
import { FC } from "react"
import { ArticleItem } from "./components/ArticleItem"

type Props = {
  articles: Article[]
}

export const ArticleList: FC<Props> = (props) => {
  const { articles } = props

  return (
    <ul>
      {articles.map((article) => (
        <li className="border-b-2 border-solid border-sub px-[30px] py-[40px]" key={article.id}>
          <ArticleItem {...article} />
        </li>
      ))}
    </ul>
  )
}
