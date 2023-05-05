import { FC } from "react"

export const Profile: FC = () => (
  <div className="w-[170px] rounded-[15px] bg-sub px-[12px] py-[20px] shadow-dropMain">
    <div className="mx-auto h-[100px] w-[100px]">
      <img className="h-full w-full rounded-full" src="/images/profile.webp" alt="shin-taroのプロフィール画像" />
    </div>
    <h4 className="mt-[10px] text-fifth">shin-taro</h4>
    <p className="mt-[5px] text-fifth">フロントエンドをやっています。 このブログは気ままに書いているので更新頻度は疎らです。</p>
  </div>
)
