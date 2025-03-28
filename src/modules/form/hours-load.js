import dayjs from "dayjs"

import { operningHours } from "../../utils/opening-hours.js"

const hours = document.getElementById("hours")

export function hoursLoad({date}) {
  const opening = operningHours.map((hour) => {
    // Retrieve only the hour
    const [scheduleHour] = hour.split(":")
    
    // Add hour to date and verify if it is on the past
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())  

    return {
      hour,
      available: !isHourPast,
    }
  })

  // Render schedules hours
  opening.forEach(({hour, available}) => {
    const li = document.createElement("li")
    li.classList.add("hour")
    li.classList.add(available ? "hour-available" : "hour-unavailable")

    li.textContent = hour
    hours.append(li)
  })
}