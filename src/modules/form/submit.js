import dayjs from "dayjs"

import { scheduleNew } from "../../services/schedule-new.js"
import { schedulesDay } from "../schedules/load.js"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

// Current date for input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Set min and default values for date as the current
selectedDate.min = inputToday 
selectedDate.value = inputToday

form.onsubmit = async (event) => {
  event.preventDefault()

  try {
    // Retrieve client name
    const name = clientName.value.trim()

    if(!name) {
      return alert("Informe o nome do cliente!")
    }

    // Retrieve the selected schedule hour
    const hourSelected = document.querySelector(".hour-selected")

    if(!hourSelected) {
      return alert("Selecione uma hora.")
    }

    // Retrieve the hour of selected schedule hour
    const [hour] = hourSelected.innerText.split(":")

    // insert hour to date
    const when = dayjs(selectedDate.value).add(hour, "hour")

    const id = new Date().getTime()

    // Make appointment
    await scheduleNew({
      id,
      name,
      when,
    })

    // Reload appointments
    await schedulesDay()

    // Clear name input
    clientName.value = "" 

  } catch (error) {
    alert("Não foi possível realizar o agendamento")
    console.log(error)
  }
}