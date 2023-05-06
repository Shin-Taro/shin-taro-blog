import { format } from "date-fns"

export const formatDate = (dateString: string): string => format(new Date(dateString), "yyyy/mm/dd")
