import { app, auth } from "./firebase.js";
// Import các hàm tới từ firebase để lập trình tính năng xác thực người dùng
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const registerForm = document.getElementById("register-form");
console.log("registerForm: ", registerForm);

// Bắt sự kiện khi người dùng submit form
registerForm.addEventListener("submit", (event) => {
  // Ngăn sự kiện reload mặc định của trình duyệt.
  event.preventDefault();

  console.log("Đã vào bắt sự kiện submit");

  const dataSignUp = {
    firstName: registerForm.firstName.value.trim(),
    lastName: registerForm.lastName.value.trim(),
    email: registerForm.email.value.trim(),
    password: registerForm.password.value,
    confirmPassword: registerForm.confirmPassword.value,
  };

  console.log(dataSignUp);
  // gọi hàm soát lỗi đăng ký người dùng

  // Trả về dữ liệu người dùng đã được lọc và gán lại vào biến dataSignUpClean
  let dataSignUpClean = controller.register(dataSignUp);

  // Xây dựng phương thức xác thực người dùng với dữ liệu được nhận.
  createUserWithEmailAndPassword(
    auth,
    dataSignUpClean.email,
    dataSignUpClean.password
  ).then((userCredential) => {
    // Gửi email xác thực người dùng
    sendEmailVerification(userCredential.user)
      .then(() => {
        console.log("Email verification sent!");
      })
      .catch((error) => {
        console.log("Error signing up with email and password", error);
      });
  });
});
