import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { schedulesShow } from "../schedules/show.js"
import { hoursLoad } from "../form/hours-load.js"

// Select the input date
const selectedDate = document.getElementById("date")

export async function schedulesDay(){
  // Obtain date of input
  const date = selectedDate.value

  // Fetch in API the schedules
  const dailySchedules = await scheduleFetchByDay({date})

  //Display schedules
  schedulesShow({ dailySchedules })

  // Render available schedules
  hoursLoad({date, dailySchedules})
}