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
        <li className="border-b-2 border-solid border-sub sp:px-[25px] sp:py-[15px] pc:px-[30px] pc:py-[40px]" key={article.id}>
          <ArticleItem {...article} />
        </li>
      ))}
    </ul>
  )
}
