import { Tag } from "@/components/elements/Tag"
import { TagIcon } from "@/components/icons/Tag"
import { Article } from "@/models/Article"
import Link from "next/link"
import { FC } from "react"

// TODO: リンク追加
export const ArticleItem: FC<Article> = (props) => {
  const { title, excerpt, createDate, tags, id } = props
  return (
    <article>
      <h2 className="text-second sp:text-third">
        <Link href={`/articles/${id}`}>{title}</Link>
      </h2>
      <div className="mt-[15px] flex">
        <p className="text-fifth">{createDate}</p>
        <div className="ml-[15px]">
          <TagIcon />
        </div>
        <ul className="ml-[10px] flex">
          {tags.map((tag, index) => (
            <li key={tag} className={index ? "ml-[10px]" : ""}>
              <Link href={`/search/${tag}`}>
                <Tag>{tag}</Tag>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-[12px] line-clamp-2 text-fourth sp:line-clamp-3">{excerpt}</p>
    </article>
  )
}
