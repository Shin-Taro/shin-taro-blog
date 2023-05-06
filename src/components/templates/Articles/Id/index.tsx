import { Article } from "@/models/Article"
import { FC } from "react"

export const ArticleTemplate: FC<Article> = (props) => (
  <section>
    <h1 className="text-first sp:text-second">{props.title}</h1>
    <div className="mt-[30px]" />
  </section>
)
