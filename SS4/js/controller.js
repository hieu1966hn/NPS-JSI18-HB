// Viết các hàm soát lôi người dùng nhập vào 

const controller = {};

// Thêm phương thức () register vào trong đối tượng controller.
controller.register = (dataSignUp)=>{
    // Kiểm tra xem các thẻ input có rỗng hay không?
    if(dataSignUp.firstName == ""){
        // Báo lỗi, hiển thị lỗi ở phía dưới thẻ input đó.
        document.getElementById("first-name-error").innerText = "*Please input your first name";
    }
    else{
        // Xóa hết nội dung trong thẻ div lỗi đó như sau:
        document.getElementById("first-name-error").innerText = "";
    }
    
    // Last name
    if(dataSignUp.lastName == ""){
        // Báo lỗi, hiển thị lỗi ở phía dưới thẻ input đó.
        document.getElementById("last-name-error").innerText = "*Please input your last name";
    }
    else{
        // Xóa hết nội dung trong thẻ div lỗi đó như sau:
        document.getElementById("last-name-error").innerText = "";
    }
    // email 
    if(dataSignUp.email == ""){
        // Báo lỗi, hiển thị lỗi ở phía dưới thẻ input đó.
        document.getElementById("email-error").innerText = "*Please input your email";
    }
    else{
        // Xóa hết nội dung trong thẻ div lỗi đó như sau:
        document.getElementById("email-error").innerText = "";
    }
    
    // password
    if(dataSignUp.password == ""){
        // Báo lỗi, hiển thị lỗi ở phía dưới thẻ input đó.
        document.getElementById("password-error").innerText = "*Please input your password";
    }
    else{
        // Xóa hết nội dung trong thẻ div lỗi đó như sau:
        document.getElementById("password-error").innerText = "";
    }

    //confirm password
    if(dataSignUp.confirmPassword == ""){
        // Báo lỗi, hiển thị lỗi ở phía dưới thẻ input đó.
        document.getElementById("confirm-password-error").innerText = "*Please input your confirm password";
    }
    else{
        // Xóa hết nội dung trong thẻ div lỗi đó như sau:
        document.getElementById("confirm-password-error").innerText = "";
    }

    
}