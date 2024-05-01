import { format } from "date-fns";

export function generateUID(){
  return `x-${Date.now().toString(36)}-y`
}

export function formatDate(date:string) {
  return format(date, "EEE d LLL y h:mm aaa")
}