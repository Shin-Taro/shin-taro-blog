"use client"

import { FC } from "react"
import parse from "html-react-parser"
import { ParserOption } from "./const/ParserOption"

type Props = {
  htmlString: string
}

export const ArticleBody: FC<Props> = (props) => {
  const { htmlString } = props
  return <>{parse(htmlString, ParserOption)}</>
}
