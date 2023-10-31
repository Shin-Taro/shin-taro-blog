import { GA_TAG_ID } from "@/const/GA_TAG_ID"

export const dispatchPageView = (path: string) => {
  if (typeof window.gtag !== "function") return
  if (!GA_TAG_ID) return

  window.gtag("config", GA_TAG_ID, {
    page_path: path,
  })
}
