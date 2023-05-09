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
Функции расчётов по введёным данным
алгоритм (блок-схема) описаный в книге
*/

//Расчёт Блоков 18 и 32 в учебнике
let calculateZgt1t2t3QiNotMoreQs = (
    Tp,
    Qmax,
    currectQmainI,
    currectQMainPlusAdditionalI,
    Zt,
    currectQadditionalI
) => {
    //Расчёт Zг t1 t2 t3 по формуле Qi < Qs
    console.log("Данные для расчёта zg t1 t2 t3 Qi < Qs");
    console.log(Tp);
    console.log(Qmax);
    console.log(currectQmainI);
    console.log(currectQMainPlusAdditionalI);
    console.log(Zt);
    console.log(currectQadditionalI);
    let Zg =
        ((Tp * (Qmax - currectQmainI) * (currectQMainPlusAdditionalI - Qmax) +
            Zt * currectQadditionalI) *
            currectQmainI) /
        ((Qmax - currectQmainI) * (currectQMainPlusAdditionalI - Qmax) +
            currectQmainI * currectQadditionalI);
    Zg = Zg.toFixed(1);
    t1 = Zg / currectQmainI;
    t1 = t1.toFixed(2);

    t2 = (Zg - Zt) / (Qmax - currectQmainI);
    t2 = t2.toFixed(2);

    t3 =
        ((Tp * currectQmainI - Zg) * (Qmax - currectQmainI)) /
        (currectQmainI * currectQadditionalI);
    t3 = t3.toFixed(2);
    console.log("Расчёт по формуле Qi < Qs");

    console.log(Zg);
    console.log(t1);
    console.log(t2);
    console.log(t3);
    return t1;
};

let calculateZgt1t2t3QiMoreQs = (
    Tp,
    Qmax,
    currectQmainI,
    currectQmainS,
    Zt,
    currectQMainPlusAdditionalS,
    currectQadditionalS
) => {
    console.log("Данные для расчёта zg t1 t2 t3 Qi > Qs");
    console.log(Tp);
    console.log(Qmax);
    console.log(currectQmainI);
    console.log(currectQmainS);
    console.log(currectQMainPlusAdditionalS);
    console.log(currectQadditionalS);
    console.log(Zt);
    //Расчёт Zг t1 t2 t3 по формуле Qi > Qs
    let Zg =
        ((Tp * Qmax - Zt) *
            (Qmax - currectQmainS) *
            (currectQMainPlusAdditionalS - Qmax) +
            Zt * Qmax * currectQadditionalS) /
        (Qmax * currectQadditionalS);
    Zg = Zg.toFixed(1);
    t1 = Zt / currectQmainI;
    t1 = t1.toFixed(2);

    t2 = (Zg - Zt) / (Qmax - currectQmainS);
    t2 = t2.toFixed(2);

    t3 =
        ((Tp * Qmax - Zt) * (Qmax - currectQmainS)) /
        (Qmax * currectQadditionalS);
    t3 = t3.toFixed(2);
    console.log("Расчёт по формуле Qi > Qs");
    console.log(Zg);
    console.log(t1);
    console.log(t2);
    console.log(t3);
    return t1;
};

//Расчет блока 23
let calculateZgt2t3QiNotMoreQs = (
    Tp,
    Qmax,
    currectQmainI,
    currectQMainPlusAdditionalI,
    Zt,
    currectQadditionalI
) => {
    console.log("Данные для расчёта zg t2 t3 Qi < Qs");
    console.log(Tp);
    console.log(Qmax);
    console.log(currectQmainI);
    console.log(currectQMainPlusAdditionalI);
    console.log(currectQadditionalI);
    console.log(Zt);
    //Расчёт Zг t2 t3 по формуле Qi < Qs
    let Zg =
        (Tp * (Qmax - currectQmainI) * (currectQMainPlusAdditionalI - Qmax) +
            Zt * currectQadditionalI) /
        currectQadditionalI;
    Zg = Zg.toFixed(1);

    t2 = (Zg - Zt) / (Qmax - currectQmainI);
    t2 = t2.toFixed(2);

    t3 = (Zg - Zt) / (currectQMainPlusAdditionalI - Qmax);
    t3 = t3.toFixed(2);
    console.log("Расчёт по формуле Qi < Qs");

    console.log(Zg);
    console.log(t2);
    console.log(t3);
};

let calculateZgt2t3QiMoreQs = (
    Tp,
    Qmax,
    currectQmainI,
    currectQmainS,
    Zt,
    currectQMainPlusAdditionalS,
    currectQadditionalS,
    currectQMainPlusAdditionalI
) => {
    console.log("Данные для расчёта zg t2 t3 Qi > Qs");
    console.log(Tp);
    console.log(Qmax);
    console.log(currectQmainI);
    console.log(currectQMainPlusAdditionalS);
    console.log(currectQMainPlusAdditionalI);
    console.log(currectQadditionalS);
    console.log(Zt);
    //Расчёт Zг t1 t2 t3 по формуле Qi > Qs
    let Zg =
        (Tp * (Qmax - currectQmainS) * (currectQMainPlusAdditionalS - Qmax) +
            Zt * currectQadditionalS) /
        currectQadditionalS;
    Zg = Zg.toFixed(1);

    t2 = (Zg - Zt) / (Qmax - currectQmainS);
    t2 = t2.toFixed(2);

    t3 = (Zg - Zt) / (currectQMainPlusAdditionalS - Qmax);
    t3 = t3.toFixed(2);
    console.log("Расчёт по формуле Qi > Qs");
    console.log(Zg);
    console.log(t2);
    console.log(t3);
};

//Расчёт Блока 22 в учебнике
let calculateZgt2t3t4QiNotMoreQs = (
    Tp,
    Qmax,
    currectQmainI,
    currectQMainPlusAdditionalI,
    Zt,
    currectQadditionalI,
    currectQmainS
) => {
    console.log("Данные для расчёта zg t2 t3 t4 Qi < Qs");
    console.log(Qmax);
    console.log(Tp);
    console.log(currectQmainI);
    console.log(currectQMainPlusAdditionalI);
    console.log(currectQadditionalI);
    console.log(currectQmainS);
    console.log(Zt);
    //Расчёт Zг t2 t3 t4 по формуле Qi < Qs
    let Zg =
        (currectQmainS *
            (Tp *
                (Qmax - currectQmainI) *
                (currectQMainPlusAdditionalI - Qmax) +
                Zt * currectQadditionalI)) /
        ((Qmax - currectQmainI) * (currectQMainPlusAdditionalI - Qmax) +
            currectQmainS * currectQadditionalI);
    Zg = Zg.toFixed(1);

    t2 = (Zg - Zt) / (Qmax - currectQmainI);
    t2 = t2.toFixed(2);

    t3 = (Zg - Zt) / (currectQMainPlusAdditionalI - Qmax);
    t3 = t3.toFixed(2);

    t4 = Zg / currectQmainS;
    t4 = t4.toFixed(2);

    console.log("Расчёт по формуле Qi < Qs");

    console.log(Zg);
    console.log(t2);
    console.log(t3);
    console.log(t4);
};

let calculateZgt2t3t4QiMoreQs = (
    Tp,
    Qmax,
    currectQmainS,
    Zt,
    currectQMainPlusAdditionalS,
    currectQadditionalS,
    currectQMainPlusAdditionalI
) => {
    console.log("Данные для расчёта zg t2 t3 t4 Qi > Qs");
    console.log(Tp);
    console.log(currectQmainS);
    console.log(Zt);
    console.log(Qmax);
    console.log(currectQmainS);
    console.log(currectQMainPlusAdditionalS);
    console.log(currectQadditionalS);
    console.log(currectQMainPlusAdditionalI);
    console.log(Zt);
    //Расчёт Zг t2 t3 t4 по формуле Qi > Qs
    let Zg =
        ((Tp * currectQmainS - Zt) *
            (Qmax - currectQmainS) *
            (currectQMainPlusAdditionalS - Qmax) +
            Zt * currectQmainS * currectQadditionalS) /
        (currectQmainS * currectQadditionalS);
    Zg = Zg.toFixed(1);

    t2 = (Zg - Zt) / (Qmax - currectQmainS);
    t2 = t2.toFixed(2);

    t3 = (Zg - Zt) / (currectQMainPlusAdditionalS - Qmax);
    t3 = t3.toFixed(2);

    t4 = Zt / currectQmainS;
    t4 = t4.toFixed(2);

    console.log("Расчёт по формуле Qi > Qs");

    console.log(Zg);
    console.log(t2);
    console.log(t3);
    console.log(t4);
};

calculateNode.addEventListener("click", () => {
    let allCars = infoForCalculated.currectCars;
    let S = infoForCalculated.N + Number(1);
    let Zt;
    //Qсреднее
    let Qavg = Number(avgStockNode.value);
    let Qmean = Number(totalStockNode.value);
    console.log(Qavg);
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
            let currectQadditionalI =
                objectAllInfoAboutMainAndAdditionCars[indexMonth].Qadditional[
                    i
                ];
            let currectQadditionalS =
                objectAllInfoAboutMainAndAdditionCars[indexMonth].Qadditional[
                    i + 1
                ];
            let currectQMainPlusAdditionalI =
                objectAllInfoAboutMainAndAdditionCars[indexMonth]
                    .QmainPlusAdditional[i];
            let currectQMainPlusAdditionalS =
                objectAllInfoAboutMainAndAdditionCars[indexMonth]
                    .QmainPlusAdditional[i + 1];
            let Qmax = objectAllInfoAboutMainAndAdditionCars[indexMonth].Qmax;
            let t3i = 0;
            let t4;
            let t1;
            console.log(currectQMainPlusAdditionalI);
            let Tp = objectAllInfoAboutMainAndAdditionCars[indexMonth].Tp;
            // console.log(currectQmainI);
            // console.log(currectQmainS);
            // console.log(S);
            // console.log(Qmax);
            // стр. 111 блок 10
            let new_Tp = 0;
            if (S <= 2) {
                // стр. 111 блок 14
                console.log("Проверяем какая пара операции");
                if (i == 0) {
                    Zt = 0.25 * Qavg;
                } else {
                    Zt = currectQmainS;
                }
                // if (S <= 2) {
                //     // стр. 111 блок 14
                //     //Расчёт Zt = 0.25 * Qcр
                //     console.log("Блок 14 меньше 2 технология");

                //     Zt = 0.25 * Qavg;
            } else {
                console.log("Проверяем какая пара операции");

                if (S < 10) {
                    if (i == 0) {
                        Zt = Qavg;
                    } else {
                        Zt = currectQmainS;
                    }
                } else {
                    Zt = currectQmainS;
                }
            }
            console.log(Zt);
            if (indexMonth == 0) {
                if (currectQmainI > currectQmainS) {
                    if (currectQmainI == Qmax) {
                        t1 = calculateZgt1t2t3QiMoreQs(
                            Tp,
                            Qmax,
                            currectQmainI,
                            currectQmainS,
                            Zt,
                            currectQMainPlusAdditionalS,
                            currectQadditionalS
                        );
                    } else {
                        t1 = calculateZgt1t2t3QiNotMoreQs(
                            Tp,
                            Qmax,
                            currectQmainI,
                            currectQMainPlusAdditionalI,
                            Zt,
                            currectQadditionalI
                        );
                    }
                } else {
                    t1 = calculateZgt1t2t3QiNotMoreQs(
                        Tp,
                        Qmax,
                        currectQmainI,
                        currectQMainPlusAdditionalI,
                        Zt,
                        currectQadditionalI
                    );
                }

                if (i != 0) {
                    new_Tp = Tp - t1;
                    console.log("Это tp = tp - t1 = " + new_Tp);
                }
            } else {
                // стр. 111 блок 19
                if (
                    indexMonth !=
                    objectAllInfoAboutMainAndAdditionCars.length - 1
                ) {
                    //Расчет Zп t2 t3
                    if (currectQmainI > currectQmainS) {
                        if (currectQmainI == Qmax) {
                            calculateZgt2t3QiMoreQs(
                                Tp,
                                Qmax,
                                currectQmainI,
                                currectQmainS,
                                Zt,
                                currectQMainPlusAdditionalS,
                                currectQadditionalS,
                                currectQMainPlusAdditionalI
                            );
                        } else {
                            calculateZgt2t3QiNotMoreQs(
                                Tp,
                                Qmax,
                                currectQmainI,
                                currectQMainPlusAdditionalI,
                                Zt,
                                currectQadditionalI
                            );
                        }
                    } else {
                        calculateZgt2t3QiNotMoreQs(
                            Tp,
                            Qmax,
                            currectQmainI,
                            currectQMainPlusAdditionalI,
                            Zt,
                            currectQadditionalI
                        );
                    }
                } else {
                    //Расчёт Zp t2 t3 t4

                    if (currectQmainI > currectQmainS) {
                        if (currectQmainI == Qmax) {
                            calculateZgt2t3t4QiMoreQs(
                                Tp,
                                Qmax,
                                currectQmainS,
                                Zt,
                                currectQMainPlusAdditionalS,
                                currectQadditionalS,
                                currectQMainPlusAdditionalI
                            );
                        } else {
                            calculateZgt2t3t4QiNotMoreQs(
                                Tp,
                                Qmax,
                                currectQmainI,
                                currectQMainPlusAdditionalI,
                                Zt,
                                currectQadditionalI,
                                currectQmainS
                            );
                        }
                    } else {
                        calculateZgt2t3t4QiNotMoreQs(
                            Tp,
                            Qmax,
                            currectQmainI,
                            currectQMainPlusAdditionalI,
                            Zt,
                            currectQadditionalI,
                            currectQmainS
                        );
                    }
                }
            }
            Qmean -= Number(Qmax) * Number(Tp);
            console.log("Pm = " + Number(Qmax) * Number(Tp));
            console.log("Qz = " + Qmean);
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
        infoForCalculated["N"] = i;
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
                additional: [64, 1, 1, 87, 1, 1, 48, 1, 1, 200, 1, 0.5],
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
    avgStockNode.value = Number(240);
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
    let Tp = [];
    let workDays = document.querySelectorAll(".work-days");
    for (let workDay of workDays) {
        Tp.push(Number(workDay.value));
    }

    let mark_arr_additional = document.querySelectorAll(
        ".mark-input-additional"
    );
    let mark_arr_main = document.querySelectorAll(".mark-input-main");
    let min;
    let max;
    let CurTp;
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
    let countMonths = 0;
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
            CurTp = Tp[countMonths];
            countMonths++;
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
                Tp: CurTp,
            });
            massMain = [];
            massAdditional = [];
            massMainPlusAdditional = [];
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
