import { hoursLoad } from "../form/hours-load.js"

// Select the input date
const selectedDate = document.getElementById("date")

export function schedulesDay(){
  // Obtain date of input
  const date = selectedDate.value

  // Render available schedules
  hoursLoad({date})
}