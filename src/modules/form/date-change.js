import { schedulesDay } from "../schedules/load"

// Selecte date input
const selectedDate = document.getElementById("date")

// Reload the schedule hour list when input date change
selectedDate.onchange = () => schedulesDay()