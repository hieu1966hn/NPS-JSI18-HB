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
    }

    console.log(dataSignUp);
    // gọi hàm soát lỗi đăng ký người dùng
    controller.register(dataSignUp);
    
});
