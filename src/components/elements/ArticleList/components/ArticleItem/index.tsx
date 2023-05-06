import { Tag } from "@/components/elements/Tag"
import { TagIcon } from "@/icons/Tag"
import { Article } from "@/models/Article"
import { FC } from "react"

// TODO: リンク追加
export const ArticleItem: FC<Article> = (props) => {
  const { title, excerpt, createDate, tags } = props
  return (
    <article>
      <h2 className="text-second sp:text-third">{title}</h2>
      <div className="mt-[15px] flex">
        <p className="text-fifth">{createDate}</p>
        <div className="ml-[15px]">
          <TagIcon />
        </div>
        <ul className="ml-[10px] flex">
          {tags.map((tag, index) => (
            <li key={tag} className={index ? "ml-[10px]" : ""}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-[12px] line-clamp-2 text-fourth sp:line-clamp-3">{excerpt}</p>
    </article>
  )
}
