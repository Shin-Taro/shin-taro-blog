import { FC } from "react"
import { MainContainer } from "../MainContainer"

export const Footer: FC = () => (
  <footer className="flex w-full justify-center bg-sub px-[26px] pb-[46px] pt-[26px] text-sixth text-subFont shadow-dropUp">
    <MainContainer>
      <p>Copyright © 2023 shin-taro. All rights reserved.</p>
      <p className="mt-[10px]">
        このサイトは Google Analytics を使用しています。詳しくは{" "}
        <a
          className="underline underline-offset-4 hover:text-main"
          target="_blank"
          rel="noopener noreferrer"
          href="https://policies.google.com/technologies/partner-sites?hl=ja"
        >
          Google のサービスを使用するサイトやアプリから収集した情報の Google による使用 – ポリシーと規約
        </a>{" "}
        をご覧ください。
      </p>
    </MainContainer>
  </footer>
)
