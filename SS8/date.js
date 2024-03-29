// Khai báo một đối tượng Date (class) mới;
// let takeDate0 = new Date();

// /// Chúng ta có thể truyền giá trị khởi tạo vào như: 
// // date, string, number nào ngày, tháng, năm, giờ, phút, giây

// let takeDate1= new Date() // không tham số
// let takeDate2 = new Date(value) /// value là 1 số nguyên.
// let takeDate3 = new Date(dateString); // dateString là 1 chuỗi ngày tháng
// let takeDate4 = new Date(year, month); // năm và tháng
// let takeDate5 = new Date(year, month, day, hours, minutes, seconds, miliseconds); // năm, tháng và ngày.

// Ví dụ cụ thể;
let today = new Date();
console.log("today: ", today); // today:  Fri Mar 22 2024 20:37:41 GMT+0700 (Indochina Time)

let birthDay = new Date('November 10, 1996 06:20:00');
console.log("birthDay: ", birthDay); //?

let birthDay2 = new Date('1996-11-10T06:20:00');
console.log("birthDay: ", birthDay2); //?

let birthDay3 = new Date('1996,11,10');
console.log("birthDay: ", birthDay3); //?

///// Short Date: Trong JS có 4 định dạng cơ bản của 1 chuỗi ngày tháng gồm: 
//// short date, long date, full date và ISO date

let shortDate_1 = new Date('03-03-2024');
console.log("shortDate_1: ", shortDate_1);
let shortDate_2 = new Date('03/03/2024');
console.log("shortDate_2: ", shortDate_2);
let shortDate_3 = new Date('2024/03/03');
console.log("shortDate_3: ", shortDate_3);
let shortDate_4 = new Date('2024-03-03');

/// Bài tập 1: Tính số ngày giữa 2 ngày:
let date1 = new Date("2024-03-22");
let date2 = new Date("2024-04-22");
let difference_In_Time = 
date2.getTime() - date1.getTime();

console.log("difference_In_Time: ", difference_In_Time);

let difference_In_Days = 
difference_In_Time/(1000 * 3600 *24);
console.log("Số ngày giữa 2 ngày là", difference_In_Days);


// Kiểm tra một năm có phải là năm nhuận hay không?
function isLeapYear(year){
    return (year % 4 == 0 && year %100 !== 0) || (year % 400 == 0);
}
console.log(isLeapYear(2024));/// True






