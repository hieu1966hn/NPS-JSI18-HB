// Import các hàm tới từ firebase để lập trình tính năng xác thực người dùng
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const auth = getAuth(app);

const registerForm = document.getElementById("register-form");

// Bắt sự kiện khi người dùng submit form
registerForm.addEventListener("submit", (event) => {
  // Ngăn sự kiện reload mặc định của trình duyệt.
  event.preventDefault();

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
});
