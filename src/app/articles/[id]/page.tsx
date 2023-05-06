import { NextPage } from "next"
import { formatDate } from "@/modules/formatDate"
import { ArticleTemplate } from "@/components/templates/Articles/Id"

// FIXME: 後で消す
const dummy = {
  id: "dummy1",
  createDate: formatDate("2022-01-01T00:00:00.000Z"),
  title: "Dummy article title",
  body: '<h2>Sammary</h2>\n<p>this is test post .<br>\nthis is inline code test . <code>const hoge = &quot;test&quot;</code></p>\n<pre><code class="language-ts">const fuga: string = &quot;fuga&quot;\n</code></pre>\n<pre><code class="language-diff">+ const Piyo: number = 0\n- const puyo = 0\n</code></pre>\n<p><img src="https://storage.googleapis.com/p_6454c5577701b2db02707526/59657d94-aa48-4b72-824b-9a8bbc764fb0/profile.webp" alt="profile.webp"></p>\n',
  tags: ["React", "Next"],
  excerpt:
    "Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.Dummy article excerpt.",
}

const ArticlePage: NextPage = () => <ArticleTemplate {...dummy} />

export default ArticlePage
