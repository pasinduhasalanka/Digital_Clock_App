# 🕒 Digital Clock App

A simple and elegant **React-based Digital Clock** that updates every second and displays the current time in a **12-hour format (AM/PM)**.

---

## 🚀 Features

- ⏱️ Real-time updating every second  
- 🌓 12-hour format with AM/PM indicator  
- ⚛️ Built using **React Hooks** (`useState`, `useEffect`)  
- 🎨 Minimal, responsive UI styling with CSS  
- 🔁 Auto cleanup of intervals to prevent memory leaks  

---

## 🧩 Project Structure

```
📂 digital-clock-app
 ┣ 📜 App.css
 ┣ 📜 DigitalClock.jsx
 ┣ 📜 main.jsx
 ┣ 📜 index.css
 ┣ 📜 App.jsx
 ┗ 📜 package.json
```

---

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   https://github.com/pasinduhasalanka/Digital_Clock_App
   git clone https://github.com/pasinduhasalanka/Digital_Clock_App.git
   cd digital-clock-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the app:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:5173/
   ```

---

## 💡 How It Works

- The app initializes the state with the current `Date` object.  
- Using `setInterval`, it updates the state every 1000 milliseconds (1 second).  
- The `formatTime()` function converts the time into a readable **12-hour format** with zero-padding.  
- The UI updates automatically as the React state changes.

---

**## 🧠 Technologies Used

- **React 18+**
- **Vite**
- **JavaScript (ES6+)**
- **CSS3****

---


## 👨‍💻 Author

**Your Name**  
📧 your.email@example.com  
🌐 (https://github.com/pasinduhasalanka/Digital_Clock_App))

---


