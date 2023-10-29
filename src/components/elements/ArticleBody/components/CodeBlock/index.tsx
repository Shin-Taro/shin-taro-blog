import { FC, HTMLAttributes, PropsWithChildren } from "react"

export const CustomPre: FC<PropsWithChildren<HTMLAttributes<HTMLPreElement>>> = (props) => (
  <pre {...props} className="mt-[15px] rounded-[10px] bg-sub p-[20px]">
    {props.children}
  </pre>
)
export const CustomCode: FC<PropsWithChildren<HTMLAttributes<HTMLElement>>> = (props) => (
  <code {...props} className="text-fourth font-medium">
    {props.children}
  </code>
)
