
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
/*
Взятие всех радиокнопок
*/
let allRadioButtonNode = document.querySelectorAll(".radio-input");
/*

*/
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
/* 
Функция генерации id для ввода данных по основным и доп машинам
*/
let generatedIdForBasicAndAdditionalTable = (firstMonth, countMonth) => {
  /*Для основных
  id для разных машин main-car-mark-v, main-car-mark-t, main-car-mark-c, main-car-mark-p.
  */

  /*Для дополнительных
  id для разных машин additional-car-mark-v, additional-car-mark-t, additional-car-mark-c, additional-car-mark-p.
  */

  //id для числа раб дней count-work-days
  for (let i = firstMonth; i < Number(countMonth) + Number(firstMonth); i++) {
    // Получение названия месяца на русском языке
    let monthName = new Date(2023, i - 1, 1).toLocaleString("ru", {
      month: "long",
    });
    console.log(monthName);
    //ОСНОВНЫЕ
    //id основные для числа машин на разных месяцах
    console.log(`main-${i}-cars-v`);
    console.log(`main-${i}-cars-t`);
    console.log(`main-${i}-cars-c`);
    console.log(`main-${i}-cars-p`);
    //id для числа смен на разных месяцах
    console.log(`main-${i}-shifts-v`);
    console.log(`main-${i}-shifts-t`);
    console.log(`main-${i}-shifts-c`);
    console.log(`main-${i}-shifts-p`);
    //id для числа смен выработки на разных месяцах
    console.log(`main-${i}-production-v`);
    console.log(`main-${i}-production-t`);
    console.log(`main-${i}-production-c`);
    console.log(`main-${i}-production-p`);
    //ДОПОЛНИТЕЛЬНЫЕ
    //id основные для числа машин на разных месяцах
    console.log(`additional-${i}-cars-v`);
    console.log(`additional-${i}-cars-t`);
    console.log(`additional-${i}-cars-c`);
    console.log(`additional-${i}-cars-p`);
    //id для числа смен на разных месяцах
    console.log(`additional-${i}-shifts-v`);
    console.log(`additional-${i}-shifts-t`);
    console.log(`additional-${i}-shifts-c`);
    console.log(`additional-${i}-shifts-p`);
    //id для числа смен выработки на разных месяцах
    console.log(`additional-${i}-production-v`);
    console.log(`additional-${i}-production-t`);
    console.log(`additional-${i}-production-c`);
    console.log(`additional-${i}-production-p`);
  }
};

confirmInputNode.addEventListener("click", () => {
  generatedIdForBasicAndAdditionalTable(
    firstMonthNode.value,
    monthCountNode.value
  );
});
