import { NextPage } from "next"
import { Home } from "@/components/templates/Home"
import { formatDate } from "@/modules/formatDate"

// FIXME: 後で消す
const dummy = {
  articles: [
    {
      id: "dummy1",
      createDate: formatDate("2022-01-01T00:00:00.000Z"),
      title: "Dummy article title",
      body: "<p>Plain text is available using the fmt operator.</p>",
      tags: ["React", "Next.js"],
      excerpt:
        "Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.",
    },
    {
      id: "dummy2",
      createDate: formatDate("2022-01-01T00:00:00.000Z"),
      title: "Dummy article title",
      body: "<p>Plain text is available using the fmt operator.</p>",
      tags: ["React", "Next.js"],
      excerpt:
        "Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.",
    },
  ],
}

const HomePage: NextPage = () => <Home articleListProps={dummy} />

export default HomePage
