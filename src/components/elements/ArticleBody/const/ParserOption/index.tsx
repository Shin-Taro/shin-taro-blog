"use client"

import { HTMLReactParserOptions, Element, domToReact, attributesToProps, Text } from "html-react-parser"
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs"

import SyntaxHighlighter from "react-syntax-highlighter"
import { CustomCode, CustomPre } from "../../components/CodeBlock"

// eslint-disable-next-line unicorn/no-useless-undefined
const NoReturnValue = undefined

export const ParserOption: HTMLReactParserOptions = {
  // このファイルで全てのHTMLタグを定義する
  // eslint-disable-next-line sonarjs/cognitive-complexity
  replace: (domNode) => {
    if (!(domNode instanceof Element)) return NoReturnValue

    const { tagName, children, attribs, parentNode } = domNode
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
        <p className="mt-[20px] text-fourth leading-loose tracking-wide sp:leading-relaxed" {...props}>
          {domToReact(children, ParserOption)}
        </p>
      )

    if (tagName === "a")
      return (
        <a className="text-link hover:underline hover:underline-offset-4" {...props}>
          {domToReact(children, ParserOption)}
        </a>
      )

    if (tagName === "ul") {
      const isChildList = parentNode instanceof Element && parentNode?.tagName === "li"
      const listClass = isChildList ? "ml-[20px] list-circle" : "mt-[10px] list-disc"
      return (
        <ul className={`list-inside text-fourth ${listClass}`} {...props}>
          {domToReact(children, ParserOption)}
        </ul>
      )
    }

    if (tagName === "ol") {
      const isChildList = parentNode instanceof Element && parentNode?.tagName === "li"
      const listClass = isChildList ? "ml-[20px] list-roman" : "mt-[10px] list-decimal"

      return (
        <ol className={`list-inside text-fourth ${listClass}`} {...props}>
          {domToReact(children, ParserOption)}
        </ol>
      )
    }

    if (tagName === "li")
      return (
        <li className="mt-[5px] text-fourth" {...props}>
          {domToReact(children, ParserOption)}
        </li>
      )

    if (tagName === "blockquote")
      return (
        <blockquote className="mt-[20px] border-l-4 border-subFont py-2 pl-8 text-fourth text-subFont" {...props}>
          {domToReact(children)}
        </blockquote>
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
