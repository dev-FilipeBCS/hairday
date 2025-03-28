export function hoursClick() {
  const hours = document.querySelectorAll(".hour-available")
  
  hours.forEach((available) => {
    available.addEventListener("click", (selected) => {

      // Remove class hour-selected from all li not selected
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected")
      })

      // Add class hour-selected to clicked li 
      selected.target.classList.add("hour-selected")
    })
  })
}