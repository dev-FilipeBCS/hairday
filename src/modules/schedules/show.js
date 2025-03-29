import dayjs from "dayjs"

// Select the sections morning, afternoon and night

const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

export function schedulesShow ({ dailySchedules }) {
  try {
    // Clean lists
    periodMorning.innerHTML = ""
    periodAfternoon.innerHTML = ""
    periodNight.innerHTML = "" 

    // Render schedules per period
    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li")
      const time = document.createElement("strong")
      const name = document.createElement("span")  
      
      // Add schedule id
      item.setAttribute("data-id", schedule.id)
      time.textContent = dayjs(schedule.when).format("HH:mm")
      name.textContent = schedule.name

      // Create the cancel icon for schedule
      const cancelIcon = document.createElement("img")
      cancelIcon.classList.add("cancel-icon")
      cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
      cancelIcon.setAttribute("alt", "Cancelar")

      // Add time, name and icon to item
      item.append(time, name, cancelIcon)

      // Obtain exclusivily the hour
      const hour =dayjs(schedule.when).hour()

      // Render schedule on section(morning, afternoon, night) conditionally
      if (hour <= 12) {
        periodMorning.appendChild(item)
      } else if (hour > 12 && hour < 18) {
        periodAfternoon.appendChild(item)
      } else {
        periodNight.appendChild(item)
      }
    })

  } catch (error) {
    alert("Nãao foi possível exibir os agendamentos.")
    console.log(error)
  }
}