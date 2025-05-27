import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load.js";
import { schedulesShow } from "./show.js";

// Seleciona o input de data
const selectedDate = document.getElementById("date");

export async function schedulesDay() {
  // 1. Busca na API os agendamentos para carrear o lado direito da tela
  // 2. Os horários disponíveis (horário futuro + horário não agendado) do lado esquerdo (form)

  // Obtém a data do input
  const date = selectedDate.value;

  // Busca na API os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date });

  // Eibe os agendamenros
  schedulesShow({ dailySchedules });

  //Renderiza as horas disponíveis
  hoursLoad({ date, dailySchedules });
}
