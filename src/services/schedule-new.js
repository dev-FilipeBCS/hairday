import { apiConfig } from "./api-config"

export async function scheduleNew({ id, name, when }) {
  try {
    // Make requisition to send schedule data
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id, name, when }),
    })

    // Display message of scheduling complete
    alert("Agendamento realizado com sucesso!")
  } catch (error) {
    console.log(error)
    alert("Não foi possível agendar. Tente novamente mais tarde.")
  }
}