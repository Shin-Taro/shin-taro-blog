import { ArticleList } from "@/components/elements/ArticleList"
import { ComponentPropsWithoutRef, FC } from "react"

type Props = {
  articleListProps: ComponentPropsWithoutRef<typeof ArticleList>
  tag: string
  total: number
}

export const SearchTagTemplate: FC<Props> = (props) => (
  <section>
    <h1 className="text-center text-first sp:text-second">「{props.tag}」に関する記事一覧</h1>
    <p className="mt-[15px] text-center text-third">{props.total}件の記事</p>
    <div className="mt-[30px]">
      <ArticleList {...props.articleListProps} />
    </div>
  </section>
)
