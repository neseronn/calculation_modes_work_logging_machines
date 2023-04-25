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
let avgStockNode = document.querySelector("#avg-stock");
let zoneLengthNode = document.querySelector("#zone-length");
let shiftsNumberNode = document.querySelector("#shifts-number");
let replaceableMachinePerformanceNode = document.querySelector(
    "#replaceable-machine-performance"
);
let objectAllInfoAboutMainAndAdditionCars = [];
let infoForCalculated = {};
let resultCalculated = {};
/*
Функция расчётов по введёным данным
алгоритм (блок-схема) описаный в книге
*/
calculateNode.addEventListener("click", () => {
    let allCars = infoForCalculated.currectCars;
    for (
        let indexMonth = 0;
        indexMonth < objectAllInfoAboutMainAndAdditionCars.length;
        indexMonth++
    ) {
        for (let i = 0; i < allCars.length - 1; i++) {
            // let currectCar = allCars[i] + allCars[i + 1];
            let currectQmainI =
                objectAllInfoAboutMainAndAdditionCars[indexMonth].Qmain[i];
            let currectQmainS =
                objectAllInfoAboutMainAndAdditionCars[indexMonth].Qmain[i + 1];
            console.log(currectQmainI);
            console.log(currectQmainS);
            // стр. 111 блок 7
            // if (currectQmainI > currectQmainS) {
            //     // стр. 111 блок 8
            //     if (
            //         currectQmainI !=
            //         objectAllInfoAboutMainAndAdditionCars[indexMonth].Qmax
            //     ) {
            //     }
            // }
            // // стр. 111 блок 9
            // else {
            //     //Пока не знаю, если у нас доп машины пока их нет идём на 24 блок
            //     if (true) {
            //         // стр. 111 блок 24
            //         if (indexMonth == 0) {
            //             // стр. 111 блок 25
            //             if (i != 0) {
            //                 // стр. 111 блок 26
            //             }
            //             // стр. 111 блок 27
            //         } else {
            //             // стр. 111 блок 33
            //             if (
            //                 indexMonth !=
            //                 objectAllInfoAboutMainAndAdditionCars.length
            //             ) {
            //             }
            //         }
            //     }
            // }

            //ЗАПИСЬ ДАННЫХ В ОБЪЕКТ ПО МЕСЯЦАМ И МАШИНАМ
            // resultCalculated[month] = {
            //     ...resultCalculated[month],
            //     [currectCar]: { t1: 5, t2: 6 },
            // };
            // console.log(resultCalculated);
        }
    }
});
/*
Вывод ввода данных для основных и дополнительных машин
*/
let allRadioButtonNode = document.querySelectorAll(".radio-input");
for (let i = 0; i < allRadioButtonNode.length; i++) {
    allRadioButtonNode[i].addEventListener("input", () => {
        let cars = allRadioButtonNode[i].id.toUpperCase().split("-");
        console.log(cars);
        infoForCalculated["currectCars"] = cars;
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
            let repeatInput = {
                main: [64, 1, 1, 87, 1, 1, 48, 2, 1, 200, 1, 0.5],
                additional: [64, 1, 1, 87, 1, 1, 48, 2, 1, 200, 1, 0.5],
                mark: ["МП-5", "ТТ-4", "Тайга", "ПЛ-1"],
                workDays: 20,
            };
            select = true;
            console.log("Выбрана технология В Т С П(1)");
            //Беру все нужные поля и заполняю их (просто повтор данных верных для теста)
            let arr_main = document.querySelectorAll(".main-input");
            let arr_additional = document.querySelectorAll(".additional-input");

            let mark_arr_additional = document.querySelectorAll(
                ".mark-input-additional"
            );
            let mark_arr_main = document.querySelectorAll(".mark-input-main");

            for (let i = 0; i < repeatInput.main.length; i++) {
                arr_main[i].value = Number(repeatInput.main[i]);
                arr_additional[i].value = Number(repeatInput.additional[i]);
            }
            for (let i = 0; i < repeatInput.mark.length; i++) {
                mark_arr_main[i].value = repeatInput.mark[i];
                mark_arr_additional[i].value = repeatInput.mark[i];
            }
            let workDays = document.querySelectorAll(".work-days");
            for (let workDay of workDays) {
                workDay.value = Number(repeatInput.workDays);
            }
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
    objectAllInfoAboutMainAndAdditionCars = [];
    for (let i = 0; i < 11; i++) {
        if (allRadioButtonNode[i].checked) {
            countPairs = allRadioButtonNode[i].id.split("-").length - 1;
        }
    }
    console.log(countPairs);

    let mark_arr_additional = document.querySelectorAll(
        ".mark-input-additional"
    );
    let mark_arr_main = document.querySelectorAll(".mark-input-main");
    let min;
    let max;
    let massMainPlusAdditional = [];

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
            let bufMax = massMain;
            let bufMin = massMain;

            max = Math.max(...bufMax);
            min = Math.min(...bufMin);
            for (let i = 0; i < massMain.length; i++) {
                massMainPlusAdditional.push(massMain[i] + massAdditional[i]);
            }
            for (let i = 0; i < massMainPlusAdditional.length; i++) {
                if (massMainPlusAdditional[i] <= max) {
                    currectData = false;
                    break;
                }
            }
        }
        if (currectData == false) {
            alert("Ошибка ввода данных по основным и дополнительным машинам.");
            dataIsCorrect = false;
            break;
        } else if (
            currectData == true &&
            numberMonths == 3 * (countPairs + 1)
        ) {
            numberMonths = 0;
            objectAllInfoAboutMainAndAdditionCars.push({
                Qmain: massMain,
                Qadditional: massAdditional,
                QmainPlusAdditional: massMainPlusAdditional,
                Qmax: max,
                Qmin: min,
            });
            massMain = [];
            massAdditional = [];
            massMainPlusAdditional = [];
            currectMonth++;
        } else {
        }
    }
    if (dataIsCorrect) {
        alert("Можно приступать к расчетам на листе 111с.");
    }
    console.log(objectAllInfoAboutMainAndAdditionCars);
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
      </div>    `;
        }
        monthsNode += `</div> </div>`;
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
