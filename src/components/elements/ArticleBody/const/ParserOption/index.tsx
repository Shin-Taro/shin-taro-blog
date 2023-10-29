"use client"

import { HTMLReactParserOptions, Element, domToReact, attributesToProps, Text } from "html-react-parser"
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs"

import SyntaxHighlighter from "react-syntax-highlighter"
import { CustomCode, CustomPre } from "../../components/CodeBlock"

// eslint-disable-next-line unicorn/no-useless-undefined
const NoReturnValue = undefined

export const ParserOption: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (!(domNode instanceof Element)) return NoReturnValue

    const { tagName, children, attribs } = domNode
    const props = attributesToProps(attribs)

    if (tagName === "h2")
      return (
        <h2 className="mb-[30px] mt-[60px] text-second" {...props}>
          {domToReact(children, ParserOption)}
        </h2>
      )
    if (tagName === "h3")
      return (
        <p className="mb-[25px] mt-[50px] text-third" {...props}>
          {domToReact(children, ParserOption)}
        </p>
      )
    if (tagName === "p")
      return (
        <p className="mt-[15px] text-fourth" {...props}>
          {domToReact(children, ParserOption)}
        </p>
      )

    // code syntax highlightの設定
    if (tagName === "pre") return <>{domToReact(children, ParserOption)}</>

    if (tagName === "code") {
      const languageClass = /language-(\w+)/.exec(attribs.class)
      if (!languageClass)
        return (
          <code className="rounded-[3px] bg-sub px-[4px] py-[1px] text-fourth font-medium" {...props}>
            {domToReact(children, ParserOption)}
          </code>
        )

      const language = languageClass[1] ?? ""
      const codeText = children
        .filter((child): child is Text => child instanceof Text)
        .map((child) => child.data)
        .join("")

      return (
        <SyntaxHighlighter language={language} style={atomOneDark} PreTag={CustomPre} CodeTag={CustomCode}>
          {codeText}
        </SyntaxHighlighter>
      )
    }

    // eslint-disable-next-line jsx-a11y/alt-text
    if (tagName === "img") return <img className="mt-[20px]" {...props} />

    return NoReturnValue
  },
}
