"use client"

import { GA_TAG_ID } from "@/const/GA_TAG_ID"
import { usePathname, useSearchParams } from "next/navigation"
import Script from "next/script"
import { FC, useEffect } from "react"
import { dispatchPageView } from "./modules/dispatchPageView"

export const GATracking: FC = () => {
  const pathname = usePathname()
  const searchParameters = useSearchParams()

  useEffect(() => {
    const url = pathname + searchParameters.toString()
    dispatchPageView(url)
  }, [pathname, searchParameters])

  return process.env.NODE_ENV === "production" ? (
    <>
      <Script async strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${GA_TAG_ID}`} />
      <Script strategy="afterInteractive" id="ga-init">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TAG_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  ) : // eslint-disable-next-line unicorn/no-null
  null
}
