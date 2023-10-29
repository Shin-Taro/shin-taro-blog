import { ArticleBody } from "@/components/elements/ArticleBody"
import { Tag } from "@/components/elements/Tag"
import { TagIcon } from "@/components/icons/Tag"
import { Article } from "@/models/Article"
import Link from "next/link"
import { FC } from "react"

export const ArticleTemplate: FC<Article> = (props) => (
  <section>
    <h1 className="text-first sp:text-second">{props.title}</h1>
    <div className="mt-[15px] flex">
      <p className="text-fifth">{props.createDate}</p>
      <div className="ml-[30px]">
        <TagIcon />
      </div>
      <ul className="ml-[10px] flex">
        {props.tags.map((tag, index) => (
          <li key={tag} className={index ? "ml-[10px]" : ""}>
            <Link href={`/search/${tag}`}>
              <Tag>{tag}</Tag>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <div className="mt-[80px]">
      <ArticleBody htmlString={props.body} />
    </div>
  </section>
)
