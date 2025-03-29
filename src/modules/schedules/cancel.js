import {schedulesDay} from "./load.js"
import {scheduleCancel} from "../../services/schedule-cancel.js"

const periods = document.querySelectorAll(".period")

// Create click event for each list (morning, afternoon, night)
periods.forEach((period) => {
  // Capture the event click
  period.addEventListener("click", async (event) => {
    if(event.target.classList.contains("cancel-icon")) {
      // Obtain li father of clicked element
      const item = event.target.closest("li")
      const { id } = item.dataset

      // Get appointment id to remove
      if(id){
        // confirm if user want to remove
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar o agendamento!"
        )

        if(isConfirm) {
          // Request API to cancel appointment
          await scheduleCancel({id})
          // Reload appointments
          schedulesDay()
        }
      }
    }
  })
})