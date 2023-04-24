/*
Кнопки Повтора ввода и подтверждения общих данных
*/
let repeatTotalNode = document.querySelector("#repeat-total");
let confirmInputNode = document.querySelector("#confirm-input");
let repeatInputCarsNode = document.querySelector("#repeat-input-cars");
let confirmInputCarsNode = document.querySelector("#confirm-input-cars");
let calculateNode = document.querySelector("#calculate");
/*
Функция расчётов по введёным данным
алгоритм (блок-схема) описаный в книге
*/
calculateNode.addEventListener("click", () => {
  let monthsNode = document.querySelectorAll("#months");
  let months = [];
  for (let month of monthsNode) {
    months.push(month.innerHTML);
  }
  console.log(months);
});
/*
Переменные хранящие узлы Общих данных
для заполнения и дальнейшего использования
*/
let monthCountNode = document.querySelector("#month-count");
let firstMonthNode = document.querySelector("#first-month");
let markNode = document.querySelector("#mark");
let totalStockNode = document.querySelector("#total-stock");
let avgStockNode = document.querySelector("#avg-stock");
let zoneLengthNode = document.querySelector("#zone-length");
let shiftsNumberNode = document.querySelector("#shifts-number");
let replaceableMachinePerformanceNode = document.querySelector(
  "#replaceable-machine-performance"
);
let objectAllInfoAboutMainAndAdditionCars = {};
let cats;
/*
Вывод ввода данных для основных и дополнительных машин
*/
let allRadioButtonNode = document.querySelectorAll(".radio-input");
for (let i = 0; i < allRadioButtonNode.length; i++) {
  allRadioButtonNode[i].addEventListener("input", () => {
    let cars = allRadioButtonNode[i].id.toUpperCase().split("-");
    console.log(cars);
    generatedIdForBasicAndAdditionalTable(
      firstMonthNode.value,
      monthCountNode.value,
      cars
    );
  });
}
/*
Повтор данных по машинам(основным и дополнительным)
(пока просто заполнение нормальными рабочими данными)
*/
repeatInputCarsNode.addEventListener("click", () => {
  let select = false;
  for (let i = 0; i < 11; i++) {
    if (
      allRadioButtonNode[i].checked &&
      allRadioButtonNode[i].id == "v-t-s-p1"
    ) {
      select = true;
      console.log("Выбрана технология В Т С П(1)");
      //Беру все нужные поля и заполняю их (просто повтор данных верных для теста)
      let arr_main = document.querySelectorAll(".main-input");
      arr_main[0].value = Number(64);
      arr_main[1].value = Number(1);
      arr_main[2].value = Number(1);

      arr_main[3].value = Number(87);
      arr_main[4].value = Number(1);
      arr_main[5].value = Number(1);

      arr_main[6].value = Number(48);
      arr_main[7].value = Number(2);
      arr_main[8].value = Number(1);

      arr_main[9].value = Number(200);
      arr_main[10].value = Number(1);
      arr_main[11].value = Number(0.5);
      let arr_additional = document.querySelectorAll(".additional-input");
      arr_additional[0].value = Number(64);
      arr_additional[1].value = Number(1);
      arr_additional[2].value = Number(1);

      arr_additional[3].value = Number(87);
      arr_additional[4].value = Number(1);
      arr_additional[5].value = Number(1);

      arr_additional[6].value = Number(48);
      arr_additional[7].value = Number(2);
      arr_additional[8].value = Number(1);

      arr_additional[9].value = Number(200);
      arr_additional[10].value = Number(1);
      arr_additional[11].value = Number(0.5);
      let mark_arr_additional = document.querySelectorAll(
        ".mark-input-additional"
      );
      let mark_arr_main = document.querySelectorAll(".mark-input-main");
      mark_arr_main[0].value = "МП-5";
      mark_arr_additional[0].value = "МП-5";
      mark_arr_main[1].value = "ТТ-4";
      mark_arr_additional[1].value = "ТТ-4";
      mark_arr_main[2].value = "Тайга";
      mark_arr_additional[2].value = "Тайга";
      mark_arr_main[3].value = "ПЛ-1";
      mark_arr_additional[3].value = "ПЛ-1";

      let workDays = document.querySelector(".work-days");
      workDays.value = Number(20);
    }
  }
  if (select) {
    console.log("Был выбран одна из технологий");
  }
});
/*Обработчик нажатия повтора последнего ввода (пока просто заполнение нормальными рабочими данными) */
repeatTotalNode.addEventListener("click", () => {
  monthCountNode.value = Number(1);
  firstMonthNode.value = Number(1);
  markNode.value = "Маз";
  totalStockNode.value = Number(100000);
  avgStockNode.value = Number(180);
  zoneLengthNode.value = Number(50);
  shiftsNumberNode.value = Number(2);
  replaceableMachinePerformanceNode.value = Number(56);
});
/*Функция для определения корректности данных */
confirmInputCarsNode.addEventListener("click", () => {
  let countPairs = 0;
  for (let i = 0; i < 11; i++) {
    if (allRadioButtonNode[i].checked) {
      countPairs = allRadioButtonNode[i].id.split("-").length - 1;
    }
  }
  console.log(countPairs);

  let mark_arr_additional = document.querySelectorAll(".mark-input-additional");
  let mark_arr_main = document.querySelectorAll(".mark-input-main");

  let monthsNode = document.querySelectorAll("#months");
  let months = [];
  for (let month of monthsNode) {
    months.push(month.innerHTML);
  }
  let arr_main = document.querySelectorAll(".main-input");
  let arr_additional = document.querySelectorAll(".additional-input");
  let massMain = [];
  let massAdditional = [];
  let main = 1;
  let additional = 1;
  let count = 0;
  let numberMonths = 0;
  let currectData = true;
  let dataIsCorrect = true;
  let currectMonth = 0;
  for (let i = 0; i < arr_main.length; i++) {
    count++;
    numberMonths++;

    main *= arr_main[i].value;
    additional *= arr_additional[i].value;
    if (count == 3) {
      count = 0;
      massAdditional.push(additional);
      massMain.push(main);
      main = 1;
      additional = 1;
    }
    if (numberMonths == 3 * (countPairs + 1)) {
      let buf = massMain;
      let max = Math.max(...buf);
      let massMainPlusAdditional = [];
      for (let i = 0; i < massMain.length; i++) {
        massMainPlusAdditional.push(massMain[i] + massAdditional[i]);
      }
      for (let i = 0; i < massMainPlusAdditional.length; i++) {
        if (massMainPlusAdditional[i] <= max) {
          currectData = false;
        }
        objectAllInfoAboutMainAndAdditionCars[months[currectMonth]] = {
          Qmain: massMain,
          Qadditional: massAdditional,
          QmainPlusAdditional: massMainPlusAdditional,
        };
        console.log(objectAllInfoAboutMainAndAdditionCars);
      }
    }
    if (currectData == false) {
      alert("Ошибка ввода данных по основным и дополнительным машинам.");
      dataIsCorrect = false;
      break;
    } else if (currectData == true && numberMonths == 12) {
      numberMonths = 0;
    } else {
    }
  }
  if (dataIsCorrect) {
    alert("Можно приступать к расчетам на листе 111с.");
  }
});
/* 
Функция генерации id для ввода данных по основным и доп машинам
*/
let generatedIdForBasicAndAdditionalTable = (firstMonth, countMonth, cars) => {
  let infoAboutMainAndAdditional = document.querySelector(
    "#infoAboutMainAndAdditional"
  );
  let monthsNode = "";
  /*Для основных
  id для разных машин main-car-mark-v, main-car-mark-t, main-car-mark-s, main-car-mark-p.
  */

  /*Для дополнительных
  id для разных машин additional-car-mark-v, additional-car-mark-t, additional-car-mark-s, additional-car-mark-p.
  */

  //id для числа раб дней count-work-days
  monthsNode = "";
  monthsNode += `<div class="header">
  <h3>Основные</h3>
  <h3>Дополнительные</h3>
</div>
<div id="machine-data">
  <div class="machine-header">
    <p>Месяц</p>
    <p>Число рабочих дней</p>
    <div class="flex-header">
      <p>Параметры</p>`;
  for (let car of cars) {
    monthsNode += `
    <p>${car}</p>`;
  }
  monthsNode += `</div>
      <div class="flex-header">
        <p>Параметры</p>`;
  for (let car of cars) {
    monthsNode += `<p>${car}</p>`;
  }
  monthsNode += `</div>
  </div>

  <div class="machine-marks">
    <div class="machine-marks-column">
      <p>Марка машины</p>`;
  for (let car of cars) {
    monthsNode += `<input
        class="input mark-input mark-input-main"
        type="text"
        name=""
        id=""
      />`;
  }
  monthsNode += `</div>
  <div class="machine-marks-column">
    <p>Марка машины</p>`;
  for (let car of cars) {
    monthsNode += `<input
            class="input mark-input mark-input-additional"
            type="text"
            name=""
            id=""
          />`;
  }
  monthsNode += `</div>
      </div>

      <div class="months">`;

  for (let i = firstMonth; i < Number(countMonth) + Number(firstMonth); i++) {
    // Получение названия месяца на русском языке
    let monthName = new Date(2023, i - 1, 1).toLocaleString("ru", {
      month: "long",
    });
    monthsNode += `<div class="month-row">
    <h2 class="month" id="months">${monthName}</h2>
    <input
      class="input work-days"
      type="text"
      id=""
      placeholder="20"
    />

    <div class="main-data">
      <div class="column parameter-name">
        <p>Число машин</p>
        <p>Число смен</p>
        <p>Смен выработки</p>
      </div>
      `;
    for (let car of cars) {
      monthsNode += `<div class="column">
        <input class="input main-input" type="text" name="" id="" />
        <input class="input main-input" type="text" name="" id="" />
        <input class="input main-input" type="text" name="" id="" />
      </div>`;
    }
    monthsNode += `
    </div>

    <div class="additional-data">
      <div class="column parameter-name">
        <p>Число машин</p>
        <p>Число смен</p>
        <p>Смен выработки</p>
      </div>`;
    for (let car of cars) {
      monthsNode += `
        <div class="column">
        <input
          class="input additional-input"
          type="text"
          name=""
          id=""
        />
        <input
          class="input additional-input"
          type="text"
          name=""
          id=""
        />
        <input
          class="input additional-input"
          type="text"
          name=""
          id=""
        />
      </div>`;
    }
  }
  //   monthsNode.innerHTML += ` </div>`;

  //   for (let i = firstMonth; i < Number(countMonth) + Number(firstMonth); i++) {
  //     // Получение названия месяца на русском языке
  //     let monthName = new Date(2023, i - 1, 1).toLocaleString("ru", {
  //       month: "long",
  //     });
  //     console.log(monthName);
  //     //ОСНОВНЫЕ
  //     //id основные для числа машин на разных месяцах
  //     console.log(`main-${i}-cars-v`);
  //     console.log(`main-${i}-cars-t`);
  //     console.log(`main-${i}-cars-s`);
  //     console.log(`main-${i}-cars-p`);
  //     //id для числа смен на разных месяцах
  //     console.log(`main-${i}-shifts-v`);
  //     console.log(`main-${i}-shifts-t`);
  //     console.log(`main-${i}-shifts-s`);
  //     console.log(`main-${i}-shifts-p`);
  //     //id для числа смен выработки на разных месяцах
  //     console.log(`main-${i}-production-v`);
  //     console.log(`main-${i}-production-t`);
  //     console.log(`main-${i}-production-s`);
  //     console.log(`main-${i}-production-p`);
  //     //ДОПОЛНИТЕЛЬНЫЕ
  //     //id основные для числа машин на разных месяцах
  //     console.log(`additional-${i}-cars-v`);
  //     console.log(`additional-${i}-cars-t`);
  //     console.log(`additional-${i}-cars-s`);
  //     console.log(`additional-${i}-cars-p`);
  //     //id для числа смен на разных месяцах
  //     console.log(`additional-${i}-shifts-v`);
  //     console.log(`additional-${i}-shifts-t`);
  //     console.log(`additional-${i}-shifts-s`);
  //     console.log(`additional-${i}-shifts-p`);
  //     //id для числа смен выработки на разных месяцах
  //     console.log(`additional-${i}-production-v`);
  //     console.log(`additional-${i}-production-t`);
  //     console.log(`additional-${i}-production-s`);
  //     console.log(`additional-${i}-production-p`);
  //   }
  infoAboutMainAndAdditional.innerHTML = monthsNode;
};

confirmInputNode.addEventListener("click", () => {
  generatedIdForBasicAndAdditionalTable(
    firstMonthNode.value,
    monthCountNode.value
  );
});
