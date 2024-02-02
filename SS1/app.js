///// Kiểu dữ liệu:
/*
1. String: Chuỗi: '',"", ``
2. Boolean: True/False
3. Number: 0 -> 9
4. Object: 
5. null: Rỗng
6. undefinded: Không xác định (khi khai báo biến không gán giá trị) 
*/
// let a;
// console.log(a); /// kết quả là gì?

///////// Biến và khai báo biến
/*
Cách khai báo biến: let, var, const
*/
// let b = 2;
// {
//     {
//         {
//             var a = 1;
//         }
//         console.log(b);//// Kết quả ra gì????
//     }
// }
// console.log(a);//// Kết quả ra gì?

/*
Toán tử: 
1. Toán tử gán: =
2. Toán tử số học: +, -, *, /
3. Toán tử so sánh: >,<, ==, ===, >=, <=, !=, !== (1 == "1")
4. Toán tử 3 ngôi: (<điều kiện>)?<Thực hiện lệnh nếu đk đúng>:<Thực hiện lệnh nếu đk sai>
5. Toán tử logic: &&, ||, ++a, --a, b++, b--;

Giải thích:
++a: Đến câu lệnh này a đã được tăng 1 đơn vị
--a: Đến câu lệnh này a đã được giảm 1 đơn vị
b++: Sau câu lệnh này b đã được tăng lên 1 đơn vị
b--: Sau câu lệnh này b đã được giảm xuống 1 đơn vị
Example: 
*/
// console.log(2 > 1 && 3 > 2 && 100 > 1 && -1 < -2 && 3 > 1); /// && sử dụng để tìm điều kiện False, nếu không có => trả về True
// ///////       true    true     true         false    True

// console.log(1 > 2 || 3 > 1 || 0 > 2); ///? /// || sử dụng để tìm điều kiện True, nếu không có => trả về False
// /////       fase      true      false

// // ví dụ toán tử 3 ngôi
// console.log(3 > 1 ? "Điều kiện trả về đúng" : "Điều kiện trả về sai");

// Bài tập về tiền tố, hậu tố (++, --)
// let p = 3;
// let q = 7;
// let r =10;
// let result = ++p * q-- + --r + p++; ////?
// /////         4  *  7  +  9  +  4
// let result2 = result + --p * p-- + q++ + r--;
// ////            41   +  4  *  4  +  6  + 9
// console.log("result2: ", result2); /// 72

// // /// Bài tập về ++, -- với kiểu dữ liệu string
// let str = "Hello";
// let updatedStr = str++ + "World";
// console.log("updatedStr: ", updatedStr); ///// Không hoạt động với String

// //// /// Bài tập về ++, -- với kiểu dữ liệu Array
// let numbers = [1,2,3,4,5];
// let i = 2;
// console.log(numbers[i++]);///3

/////// Hàm mũi tên: Khai báo hàm tính tổng 2 số
// function sum(a, b) {
//   return a + b;
// }

// const sum1 = (a, b) => {
//   return a + b;
// };

// // Viết tắt lại thành như sau
// const sum2 = (a, b) => a + b;

// // Hàm không tham số
// const alert1 = () => {
//   alert("Đây là hàm không tham số ");
// };

// alert1();
// console.log(
//     sum1(1,2)///3
// );

/////// Speard Operator
// let arr1 = [1,2,3];
// // let arr2 = arr1; ///// không sử dụng toán tử = để sao chép mảng
// let arr2 = [...arr1]; /// Sử dụng SO để sao chép phần tử mảng gốc tới bản thân biến
// arr2[3] = "Đã thay đổi rồi nhé"
// console.log(arr1); ///?

// let arr3 = ["hi","hello", "bông jua"];
// let arr4 = [...arr1, ...arr2, ...arr3];
// console.log("arr4: ", arr4);

/////// Array function nâng cao: map(), filter
let arr = [1, 2, 3, 4, 5];
///// Yêu cầu in ra mảng mới có các giá trị bên trong mảng gấp đôi mảng cũ;
// let arr2 = arr.map(item => item*2);
// console.log("arr2: ", arr2);

////// Yêu cầu in ra mảng mới có chứa các giá trị là số chẵn trong mảng cũ;
let arr3 = arr.filter((item) => item % 2 == 0);
console.log("arr3: ", arr3);
