import { schedulesDay } from "../schedules/load";

// Seleciona o input de data
const selectedDate = document.getElementById("date");

// Recarrega a lista de horários
selectedDate.onchange = () => schedulesDay();
