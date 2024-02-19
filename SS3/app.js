//// KHai báo class PhanSo
// class PhanSo {
//   //// hàm khởi tạo thuộc tính
//   constructor(tu, mau) {
//     this._tu = tu;
//     this._mau = mau;
//   }

//   //  Phương thức set
//   setTu(tuMoi) {
//     this._tu = tuMoi;
//   }

//   setMau(mauMoi) {
//     this._mau = mauMoi;
//   }

//   //   Phương thức get
//   getTu() {
//     return this._tu;
//   }
//   getMau() {
//     return this._mau;
//   }

//   //   Phương thức cộng 2 phân số
//   cong(ps) {
//     // a/b + c/d = a*d + b*c
//     let tu = this._tu * ps._mau + this._mau * ps._tu;
//     let mau = this._mau * ps._mau;

//     return new PhanSo(tu, mau);
//   }

//   //   Phương thức trừ 2 phân số
//   tru(ps) {
//     // a/b + c/d = a*d + b*c
//     let tu = this._tu * ps._mau - this._mau * ps._tu;
//     let mau = this._mau * ps._mau;

//     return new PhanSo(tu, mau);
//   }

//   //   Phương thức nhân 2 phân số
//   nhan(ps) {
//     let tu = this._tu * ps._tu;
//     let mau = this._mau * ps._mau;

//     return new PhanSo(tu, mau);
//   }

//   //   Phương thức chia 2 phân số
//   //   a/b : c/d = a*d/b*c
//   chia(ps) {
//     let tu = this._tu * ps._mau;
//     let mau = this._mau * ps._tu;

//     return new PhanSo(tu, mau);
//   }

//   //   Phương thức rút gọn phân số
//   rutGon() {
//     let a = this._tu;
//     let b = this._mau;
//     while(b!== 0){
//         let temp = b;
//         b = a %b;
//         a = temp;
//     }
//     let ucln = a;
//     return new PhanSo(this._tu/ucln, this._mau/ucln)
//   }
  
//   hienThiPhanSo(){
//     return this._tu + "/" + this._mau
//   }
// }

// let PhanSo1 = new PhanSo(1, 2);
// let PhanSo2 = new PhanSo(3, 4);

// let tong = PhanSo1.cong(PhanSo2);
// console.log(tong.rutGon().hienThiPhanSo()); ///// ?

// let hieu = PhanSo1.tru(PhanSo2);
// console.log(hieu.rutGon()); ///?

// let tich = PhanSo1.nhan(PhanSo2);
// console.log(tich.rutGon()); ///?

// let thuong = PhanSo1.chia(PhanSo2);
// console.log(thuong.rutGon()); ///?



/////// Bài tập thực hành về OOP
/*
1. Xây dựng lớp HCN gồm thuộc tính: width, height
- Xây dựng phương thức tính chu vi, diện tích HCN và hiển thị thông tin hình chữ nhật

2. Xây dựng lớp HocSinh gồm thuộc tinh: ten, maHocSinh, diemTB
- Xây dựng phương thức: Hiển thị thông tin học sinh
- Xây dựng phương thức: Xếp loại học lực học sinh biết: 
+ Giỏi: 10 - 8,0
+ Khá: 7,9 - 6,5
+ Trung Bình: 6,4 - 5,0
+ Kém: nhỏ hơn 5,0

3. Nâng cao. Xây dựng class QLHS biết
- Xây dựng phương thức: Thêm học sinh vào danh sách
- Xây dựng phương thức: Cập nhật thông tin học sinh (Bỏ hoặc làm đều được).
- Xây dựng phương thức: Hiển thị danh sách học sinh
- Xây dựng phương thức: Xóa học sinh trong danh sách biết maHocSinh cần xóa.
*/