import { NextPage } from "next"
import { formatDate } from "@/modules/formatDate"
import { ArticleTemplate } from "@/components/templates/Articles/Id"

// FIXME: 後で消す
const dummy = {
  id: "dummy1",
  createDate: formatDate("2022-01-01T00:00:00.000Z"),
  title: "Dummy article title",
  body: "<p>Plain text is available using the fmt operator.</p>",
  tags: ["React", "Next"],
  excerpt:
    "Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.",
}

const ArticlePage: NextPage = () => <ArticleTemplate {...dummy} />

export default ArticlePage
