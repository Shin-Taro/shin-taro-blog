import { NextPage } from "next"
import { formatDate } from "@/modules/formatDate"
import { SearchTag } from "@/components/templates/Search/Tag"

// FIXME: 後で消す
const dummy = {
  tag: "React",
  total: 2,
  articleListProps: {
    articles: [
      {
        id: "dummy1",
        createDate: formatDate("2022-01-01T00:00:00.000Z"),
        title: "Dummy article title",
        body: "<p>Plain text is available using the fmt operator.</p>",
        tags: ["React", "Next"],
        excerpt:
          "Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.",
      },
      {
        id: "dummy2",
        createDate: formatDate("2022-01-01T00:00:00.000Z"),
        title: "Dummy article title",
        body: "<p>Plain text is available using the fmt operator.</p>",
        tags: ["React", "Next"],
        excerpt:
          "Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.",
      },
    ],
  },
}

const SearchTagPage: NextPage = () => <SearchTag {...dummy} />

export default SearchTagPage
