import { Tag } from "@/components/elements/Tag"
import { TagIcon } from "@/components/icons/Tag"
import { Article } from "@/models/Article"
import Link from "next/link"
import { FC } from "react"

export const ArticleItem: FC<Article> = (props) => {
  const { title, excerpt, createDate, tags, id } = props
  return (
    <article>
      <h2 className="text-second sp:text-third">
        <Link className="hover:underline hover:underline-offset-8" href={`/articles/${id}`}>
          {title}
        </Link>
      </h2>
      <div className="mt-[30px] flex sp:mt-[20px]">
        <p className="text-fifth text-subFont">{createDate}</p>
        <div className="ml-[25px]">
          <TagIcon />
        </div>
        <ul className="ml-[10px] flex flex-wrap gap-3">
          {tags.map((tag) => (
            <li key={tag}>
              <Link href={`/search/${tag}`}>
                <Tag>{tag}</Tag>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-[12px] line-clamp-2 text-fourth text-subFont sp:line-clamp-3 sp:text-fifth">{excerpt}</p>
    </article>
  )
}
