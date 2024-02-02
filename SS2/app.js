//// Khởi tạo kiểu dữ liệu (đối tượng/lớp)
// class Nguoi {
//   // Hàm khởi tạo thuộc tính cho class này
//   constructor(name, age, gender, country, id, hobbies, job) {
//     // Gán giá trị cho thuộc tính của classs
//     this._name = name;
//     this._age = age;
//     this._gender = gender;
//     this._country = country;
//     this._id = id;
//     this._hobbies = hobbies;
//     this._job = job;
//   }

//   cry() {
//     alert("I am crying");
//   }

//   gaming() {
//     alert("I am a pro player");
//   }

//   introduct() {
//     return `My name is ${this._name} & i am a ${this._job} for 2 years`;
//   }
// }

// // Khai báo biến có kiểu dữ liệu là Nguoi.
// let TrungHieu = new Nguoi("Nguyễn Trung Hiếu", 26, "Male", "VN",
//  "00123456789", ["Dev", "Sleeping", "eating"], "BackEnd Developer");

// // /// In ra tên của đối tượng (KDL) vừa khai báo
// console.log(TrungHieu._name); ///

// // Gọi phương thức
// TrungHieu.introduct();

////// Tính kế thừa của lập trình hướng đối tượng OOP
// class HocSinh extends Nguoi {
//   constructor(
//     name,
//     age,
//     gender,
//     country,
//     id,
//     hobbies,
//     job,
//     school,
//     classId,
//     studentId
//   ) {
//     // từ khóa Super() giúp kế thừa hết các thuộc tính từ cha.
//     super(name, age, gender, country, id, hobbies, job);
//     this._school = school;
//     this._classId = classId;
//     this._studentId = studentId;
//   }

// kế thừa hoàn toàn mà không thay đổi gì (cái mình vừa gọi ra y hệt người cha)

/// Kế thừa và ghi đè hoặc phát triển tiếp từ người cha
//   introduct() {
//     return (
//       super.introduct() +
//       `. And now I am learning at ${this._school} với mã lớp học
//         là ${this._classId}`
//     );
//   }
// }

// let TrungHieu = new HocSinh(
//   "Nguyễn Trung Hiếu",
//   26,
//   "Male",
//   "VN",
//   "00123456789",
//   ["Dev", "Sleeping", "eating"],
//   "Student",
//   "MindX School",
//   "NPS-JSI18-HB",
//   "hieunt"
// );
// console.log(TrungHieu._name);
// console.log(TrungHieu.introduct());

/*
XÂY DỰNG kiểu dữ liệu PhanSo trong đó bao gồm thuộc tinh sau
- tuso
- mauso

Phương thức phân số gồm: +,-,*,/ 2 PhanSo
*/
// console.log(1/2); /// 0.5 => 1/2 + 3/4 = 5/4

class PhanSo {
  constructor(tu, mau) {
    this._tu = tu;
    this._mau = mau;
  }
  /// RutGonPhanSo(PhanSo)
  //   Phương thức: Cộng 2 phân số; a/b + c/d = (a*d + b*c)/(b*d)
  ///                      PS hiện tại    Phân số khác
  cong(PhanSoKhac) {
    const tuMoi = this._tu * PhanSoKhac._mau + this._mau * PhanSoKhac._tu;
    ///                 a  *  d              +         b * c
    const mauMoi = this._mau * PhanSoKhac._mau;
    
    return new PhanSo(tuMoi, mauMoi);
  }
}

let PhanSo1 = new PhanSo(1,2);
let PhanSo2 = new PhanSo(3,4);
console.log(
    PhanSo1.cong(PhanSo2)
);/// 5/4
