import dayjs from "dayjs"

import { operningHours } from "../../utils/opening-hours.js"

import { hoursClick } from "../form/hours-click.js"

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

    if(hour === "9:00"){
      hourHeaderAdd("Manhã")
    }else if (hour === "13:00") {
      hourHeaderAdd("Tarde")
    }else if (hour === "18:00") {
      hourHeaderAdd("Noite")
    }

    hours.append(li)
  })

  // Add click event to the available schedule hours
  hoursClick()
}

function hourHeaderAdd(title) {
  const header = document.createElement("li")
  header.classList.add("hour-period")
  header.textContent = title

  hours.append(header)
}