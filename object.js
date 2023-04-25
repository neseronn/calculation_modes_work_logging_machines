// objectAllInfoAboutMainAndAdditionCars = {
//     январь: {
//         Qmain: [545, 345, 4, 35],
//         Qadditional: [545, 345, 4, 35],
//         QmainPlusAdditional: [545, 345, 4, 35],
//     },
//     февраль: {
//         Qmain: [545, 345, 4, 35],
//         Qadditional: [545, 345, 4, 35],
//         QmainPlusAdditional: [545, 345, 4, 35],
//     },
//     март: {
//         Qmain: [545, 345, 4, 35],
//         Qadditional: [545, 345, 4, 35],
//         QmainPlusAdditional: [545, 345, 4, 35],
//     },
// };

// // console.log(objectAllInfoAboutMainAndAdditionCars.);
// let some = 0;
// for (let i in objectAllInfoAboutMainAndAdditionCars) {
//     console.log(objectAllInfoAboutMainAndAdditionCars[i].Qmain);
//     some++;
// }
// console.log(some);
let firstMonth = 11;
let m = [{ ноябрь: "" }, { декабрь: "" }, { январь: "" }, { февраль: "" }];
for (let i = 0; i < m.length; i++) {
    // Получение названия месяца на русском языке
    let monthName = new Date(2023, i + firstMonth - 1, 1).toLocaleString("ru", {
        month: "long",
    });
    console.log(monthName + i);
}
