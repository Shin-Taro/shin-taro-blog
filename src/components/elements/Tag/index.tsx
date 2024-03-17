import { FC, PropsWithChildren } from "react"

export const Tag: FC<PropsWithChildren> = ({ children }) => (
  <span className="rounded-[3px] bg-font px-[5px] py-[2px] align-middle text-sixth font-medium text-backGround">{children}</span>
)
