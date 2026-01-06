# 📒 iNotebook Application

A full-stack **iNotebook** application that allows users to securely create, read, update, and delete personal notes. The project is built using **React** for the frontend and **Node.js + Express** for the backend.

---

## 🚀 Project Overview

iNotebook is a note-taking web application designed to help users manage their notes efficiently. It follows a **client–server architecture** with a clear separation between frontend and backend.

* **Frontend**: React (located at the project root)
* **Backend**: Node.js with Express (located inside the `backend/` folder)

---

## 🛠️ Tech Stack

### Frontend

* React
* JavaScript (ES6+)
* HTML5 & CSS3
* Fetch API / Axios (if used)

### Backend

* Node.js
* Express.js
* MongoDB 
* Mongoose
* JWT Authentication

---

## 📂 Project Structure

```
iNotebook/
│
├── backend/               # Backend (Node.js + Express)
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── index.js
│   ├── .gitignore
│   ├── db.js
│   └── package.json
│
├── public/
├── src/                   # React frontend source code
│   ├── components/
│   ├── context/
│   ├── assests/
│   ├── App.js
│   └── index.js
│
├── package.json            # Frontend package.json
├── README.md
└── .gitignore
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone <repository-url>
cd iNotebook
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

#### Run Backend Server

```bash
npm run start
```

> Backend will start on the configured port (e.g., `http://localhost:5000`).

---

### 3️⃣ Frontend Setup

From the **root directory**:

```bash
npm install
```

#### Run Frontend Server

```bash
npm run dev
```

> Frontend will start on `http://localhost:3000` or the configured port.

---

## 🔐 Features

* User authentication (Login / Signup)
* Secure note storage
* Create, edit, and delete notes
* Protected routes using authentication
* Responsive UI

---

## 🔄 Scripts Summary

| Location | Command         | Description                    |
| -------- | --------------- | ------------------------------ |
| Frontend | `npm run dev`   | Start React development server |
| Backend  | `npm run start` | Start Node.js backend server   |

---

## 🧪 Testing

* Manual testing using browser
* API testing using Postman (if applicable)

---

## 📌 Future Enhancements

* Add note categories and tags
* Search and filter notes
* Rich text editor
* Dark mode support

---

## 👨‍💻 Author

**Shivam Kumar Dewangan**
B.Tech CSE | Full Stack Developer

---

## 📄 License

This project is developed for **VT / academic purposes**.

---

✨ *Feel free to fork this project and enhance it further!*
