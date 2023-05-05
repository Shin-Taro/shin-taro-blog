import { createClient } from "newt-client-js"

export const newtApiClient = createClient({
  spaceUid: process.env.SPACE_UID ?? "",
  token: process.env.NEWT_API_TOKEN ?? "",
  apiType: "cdn",
})
