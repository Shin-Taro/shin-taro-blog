import { GithubIcon } from "@/icons/Github"
import { TwitterIcon } from "@/icons/Twitter"
import { FC } from "react"

export const Header: FC = () => (
  <header className="rounded-[10px] bg-main shadow-dropMain sp:px-[20px] sp:py-[15px] pc:px-[30px] pc:py-[13px]">
    <div className="flex justify-between">
      <h1 className="text-first sp:text-second">shin-taro / blog</h1>
      <ul className="flex justify-between">
        <li className="flex items-center">
          <a href="https://github.com/Shin-Taro" target="_blank" rel="noopener noreferrer">
            <GithubIcon />
          </a>
        </li>
        <li className="mx-[20px] flex items-center sp:mx-[15px]">
          {/* TODO: twitterアカウント作る */}
          <a href="https://github.com/Shin-Taro" target="_blank" rel="noopener noreferrer">
            <TwitterIcon />
          </a>
        </li>
      </ul>
    </div>
  </header>
)
