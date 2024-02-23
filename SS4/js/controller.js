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
}