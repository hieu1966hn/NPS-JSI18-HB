//  thiết kế lại kết nối firebase.
// Import the functions you need from the SDKs you need

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration (ko bao giờ thay đổi).
const firebaseConfig = {
  apiKey: "AIzaSyC1x4GcFNc-BfGwdVsWmMETgGWZ6r5xEBQ",
  authDomain: "nps-jsi18-hb1.firebaseapp.com",
  projectId: "nps-jsi18-hb1",
  storageBucket: "nps-jsi18-hb1.appspot.com",
  messagingSenderId: "99757781585",
  appId: "1:99757781585:web:cb07bfcee927877a8dbe70",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // Khởi tạo firebase
const db = getFirestore(app); // kết nối và khởi tạo firestore thành công

const taskInput = document.getElementById("taskInput"); // input
const addTaskBtn = document.getElementById("addTaskBtn"); // button
const taskList = document.getElementById("taskList"); // ul

///// Xây dựng các hàm phù hợp

//// Hàm render tasks
function renderTasks(tasks){
  
}

//// Hàm cập nhật dữ liệu mới nhất trên db
const getTasks = async () => {
  const querySnapshot = await getDocs(collection(db, "tasks"));

  const tasks = querySnapshot.docs.map((doc) => {
    id: doc.id;
    description: doc.data().description;
  });
  renderTasks(tasks); ///// Cập nhật lại giao diện mới nhất theo đúng DB.
};

//// Hàm thêm 1 task vào CSDL
const addTask = async (description) => {
  await addDoc(collection(db, "tasks"), { description });
  getTasks(); // Lấy dữ liệu mới nhất từ DB về web
  taskInput.value = "";
};

//// Hàm xóa dữ liệu khi bấm nút X

//// Hàm lắng nghe sự kiện khi người dùng click chuột vào nút thêm Task.
addTaskBtn.addEventListener("click", () => {
  const description = taskInput.value.trim();
  if (description !== "") {
    addTask(description); /// Thêm mới 1 task vào cơ sở dữ liệu
  }
});

// Gọi hàm lấy dữ liệu mới nhất từ database
getTasks();
