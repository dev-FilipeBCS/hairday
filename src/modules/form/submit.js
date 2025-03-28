import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

// Current date for input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Set min and default values for date as the current
selectedDate.min = inputToday 
selectedDate.value = inputToday

form.onsubmit = (event) => {
  event.preventDefault()

  console.log("Enviado!")
}