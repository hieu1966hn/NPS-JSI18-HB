import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";

// Your web app's Firebase configuration (ko bao giờ thay đổi).
const firebaseConfig = {
  apiKey: "AIzaSyC1x4GcFNc-BfGwdVsWmMETgGWZ6r5xEBQ",
  authDomain: "nps-jsi18-hb1.firebaseapp.com",
  projectId: "nps-jsi18-hb1",
  storageBucket: "nps-jsi18-hb1.appspot.com",
  messagingSenderId: "99757781585",
  appId: "1:99757781585:web:cb07bfcee927877a8dbe70",
};

const app = initializeApp(firebaseConfig); /// Khởi tạo firebase
const db = getFirestore(app); /// Kết nối và khởi tạo database

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Function to render tasks
function renderTasks(tasks) {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <span>${task.description}</span>
            <button class="deleteBtn" data-id="${task.id}">Xóa</button>
        `;
    taskList.appendChild(li);

    // Add event listener to delete button
    const deleteBtn = li.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", () => {
      deleteTask(task.id); /// Hàm xóa task
    });
  });
}

// Hàm cập nhật dữ liệu mới nhất trên db
const getTasks = async () => {
  const querySnapshot = await getDocs(collection(db, "tasks"));
  // console.log("querySnapshot: ", querySnapshot); /// Để xem nó là gì?
  const tasks = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    description: doc.data().description,
  }));
  renderTasks(tasks); /// Cập nhật lại giao diện
};

// Function to add a task to Firestore
const addTask = async (description) => {
  await addDoc(collection(db, "tasks"), { description });
  getTasks(); /// Lấy dữ liệu mới nhất từ Database về web.
  taskInput.value = "";
};

//// Hàm xóa dữ liệu khi bấm nút delete
const deleteTask = (id) => {
  const docRef = doc(db, "tasks", id);

  deleteDoc(docRef)
    .then(() => {
      console.log("Entire Document has been deleted successfully.");
      getTasks(); /// Lấy dữ liệu mới nhất từ Database về web.
    })
    .catch((error) => {
      console.log(error);
    });
};

// Lắng nghe sự kiện khi người dùng lick vào nút thêm task => gọi hàm thêm task vào database
addTaskBtn.addEventListener("click", () => {
  const description = taskInput.value.trim();
  if (description !== "") {
    addTask(description);
  }
});

// Gọi hàm lấy dữ liệu mới nhất từ database
getTasks();

