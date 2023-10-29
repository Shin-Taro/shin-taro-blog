import { ComponentPropsWithoutRef, FC } from "react"
import { ArticleList } from "@/components/elements/ArticleList"

type Props = {
  articleListProps: ComponentPropsWithoutRef<typeof ArticleList>
}

export const HomeTemplate: FC<Props> = (props) => (
  <section>
    <h1 className="text-center text-first sp:text-second">記事一覧</h1>
    <div className="mt-[30px]">
      <ArticleList {...props.articleListProps} />
    </div>
  </section>
)
