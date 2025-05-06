import { hoursLoad } from "../form/hours-load.js";

// Seleciona o input de data
const selectedDate = document.getElementById("date");

export function schedulesDay() {
  // 1. Busca na API os agendamentos para carrear o lado direito da tela

  // Obtém a data do input
  const date = selectedDate.value;

  //Renderiza as horas disponíveis
  hoursLoad({ date });

  // 2. Os horários disponíveis (horário futuro + horário não agendado) do lado esquerdo (form)
}
