/*
Кнопки Повтора ввода и подтверждения общих данных
*/
let repeatTotalNode = document.querySelector("#repeat-total");
let confirmInputNode = document.querySelector("#confirm-input");
let repeatInputCarsNode = document.querySelector("#repeat-input-cars");
let confirmInputCarsNode = document.querySelector("#confirm-input-cars");
let calculateNode = document.querySelector("#calculate");
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
Вывод ввода данных для основных и дополнительных машин
*/
let allRadioButtonNode = document.querySelectorAll(".radio-input");
for (let i = 0; i < allRadioButtonNode.length; i++) {
  allRadioButtonNode[i].addEventListener("input", () => {
    if (allRadioButtonNode[i].id == "v-t-s-p1")
      generatedIdForBasicAndAdditionalTable(
        firstMonthNode.value,
        monthCountNode.value
      );
  });
}
/*
Повтор данных по машинам(основным и дополнительным)
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
    }
  }
  if (select) {
    console.log("Был выбран одна из технологий");
  }
});
/*Обработчик нажатия повтора последнего ввода (пока просто заполнение цифрами 3) */
repeatTotalNode.addEventListener("click", () => {
  monthCountNode.value = Number(1);
  firstMonthNode.value = Number(3);
  markNode.value = Number(3);
  totalStockNode.value = Number(3);
  zoneLengthNode.value = Number(3);
  shiftsNumberNode.value = Number(3);
  replaceableMachinePerformanceNode.value = Number(3);
});
/*Функция для определения корректности данных */
confirmInputCarsNode.addEventListener("click", () => {
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
    if (numberMonths == 12) {
      let buf = massMain;
      let max = Math.max(...buf);
      for (let i = 0; i < massMain.length; i++) {
        if (massMain[i] + massAdditional[i] <= max) {
          currectData = false;
        }
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
let generatedIdForBasicAndAdditionalTable = (firstMonth, countMonth) => {
  let monthsNode = document.querySelector(".months");
  /*Для основных
  id для разных машин main-car-mark-v, main-car-mark-t, main-car-mark-s, main-car-mark-p.
  */

  /*Для дополнительных
  id для разных машин additional-car-mark-v, additional-car-mark-t, additional-car-mark-s, additional-car-mark-p.
  */

  //id для числа раб дней count-work-days
  monthsNode.innerHTML = "";
  for (let i = firstMonth; i < Number(countMonth) + Number(firstMonth); i++) {
    // Получение названия месяца на русском языке
    let monthName = new Date(2023, i - 1, 1).toLocaleString("ru", {
      month: "long",
    });
    monthsNode.innerHTML += `<div class="month-row">
    <h2 class="month" id="">${monthName}</h2>
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
      <div class="column">
        <input class="input main-input" type="text" name="" id="" />
        <input class="input main-input" type="text" name="" id="" />
        <input class="input main-input" type="text" name="" id="" />
      </div>
      <div class="column">
        <input class="input main-input" type="text" name="" id="" />
        <input class="input main-input" type="text" name="" id="" />
        <input class="input main-input" type="text" name="" id="" />
      </div>
      <div class="column">
        <input class="input main-input" type="text" name="" id="" />
        <input class="input main-input" type="text" name="" id="" />
        <input class="input main-input" type="text" name="" id="" />
      </div>
      <div class="column">
        <input class="input main-input" type="text" name="" id="" />
        <input class="input main-input" type="text" name="" id="" />
        <input class="input main-input" type="text" name="" id="" />
      </div>
    </div>

    <div class="additional-data">
      <div class="column parameter-name">
        <p>Число машин</p>
        <p>Число смен</p>
        <p>Смен выработки</p>
      </div>
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
      </div>
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
      </div>
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
      </div>
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
      </div>
    </div>
  </div>`;
  }

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
};

confirmInputNode.addEventListener("click", () => {
  generatedIdForBasicAndAdditionalTable(
    firstMonthNode.value,
    monthCountNode.value
  );
});
