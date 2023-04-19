/*
Кнопки Повтора ввода и подтверждения общих данных
*/
let repeatTotalNode = document.querySelector("#repeat-total");
let confirmInputNode = document.querySelector("#confirm-input");
/*
Переменные хранящие узлы Общих данных
для заполнения и дальнейшего использования
*/
let monthCountNode = document.querySelector("#month-count");
let firstMonthNode = document.querySelector("#first-month");
let markNode = document.querySelector("#mark");
let totalStockNode = document.querySelector("#total-stock");
let zoneLengthNode = document.querySelector("#zone-length");
let shiftsNumberNode = document.querySelector("#shifts-number");
let replaceableMachinePerformanceNode = document.querySelector(
  "#replaceable-machine-performance"
);
/*Обработчик нажатия повтора последнего ввода (пока просто заполнение цифрами 3) */
repeatTotalNode.addEventListener("click", () => {
  monthCountNode.value = Number(3);
  firstMonthNode.value = Number(3);
  markNode.value = Number(3);
  totalStockNode.value = Number(3);
  zoneLengthNode.value = Number(3);
  shiftsNumberNode.value = Number(3);
  replaceableMachinePerformanceNode.value = Number(3);
});
