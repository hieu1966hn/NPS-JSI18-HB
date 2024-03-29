/////// Ôn tập về Date();

//// khai báo 1 biến có KDL Date();
// let currentDate = new Date();
// console.log(currentDate);

// const specificDate = new Date("2024-03-29");

// const customDate = new Date(2018,11,24,10,33,30,0); /////??
// console.log("customDate: ", customDate);///

/*  Giới thiệu kiến thức: setInterval: là một phương thức được sử dụng để 
lặp lại một hàm hoặc thực thi một đoạn mã với một khoảng thời gian cố định 
giữa mỗi lần gọi.

Cú pháp và tham số
setInterval(function, miliseconds): Gọi hàm hoặc thực thi mã sau mỗi khoảng thời
gian (được đo bằng đơn vị mili giây).

*/

// const intervalID = setInterval(myCallback, 1000);
// console.log("intervalID: ", intervalID);

// function myCallback(){
//     console.log("In ra myCallback");
// }

/*
interval ID: là một số duy nhất xác định khoảng thời gian, 
cho phép bạn hủy bỏ bằng cách gọi hàm clearInterval()

Để hủy một khoảng thời gian, sử dụng ID trả về từ setInterval()
*/

// const myInterval = setInterval(myFunction, 2000);
// /// Để dừng thực thi, gọi clearInterval();
// clearInterval(myInterval)

// Ví dụ hiển thị thời gian giống với đồng hồ số;
const intervalID = setInterval(updateTime, 1000);

function updateTime(){
    const date = new Date();
    
    document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}