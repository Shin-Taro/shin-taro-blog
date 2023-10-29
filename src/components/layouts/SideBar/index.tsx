import { FC, PropsWithChildren } from "react"

export const SideBar: FC<PropsWithChildren> = ({ children }) => <div className="w-[215px] min-w-[215px] sp:hidden">{children}</div>
