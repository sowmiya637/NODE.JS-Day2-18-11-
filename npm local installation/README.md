
# 🚀 Express.js Hello World Project

This is a simple **Node.js + Express** application that starts a server and displays:

**"Hello Sowmiya!"**

---

## 📘 What is Express.js?

**Express.js** is a fast and minimal web framework for Node.js.

It helps developers:

- Create HTTP servers easily  
- Handle routes (`GET`, `POST`, etc.)  
- Build REST APIs  
- Manage middleware  
- Process requests and responses  

---

## 📂 Project Structure

```

project-folder/
│
├── index.js
└── package.json

````

---

## 📄 Code (index.js)

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Sowmiya!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
````

---

## 📦 Dependencies (package.json)

```json
{
  "dependencies": {
    "express": "^5.1.0"
  }
}
```

---

## ▶️ How to Run the Project

### **1. Install dependencies**

```bash
npm install
```

### **2. Start the server**

```bash
node index.js
```

### **3. Open in the browser**

Visit:

```
http://localhost:3000
```

You will see:

```
Hello Sowmiya!
```

---

## 🧠 Concepts Explained

### **Express Application**

Created using `express()`, used to set up routes and server logic.

### **Routing**

Defines how the server responds to requests.
Example:

```js
app.get('/')
```

### **HTTP Response**

`res.send()` sends a text response to the client.

### **Server Listening**

```js
app.listen(3000)
```

Starts your application on port 3000.

---

* How to create an Express.js server
* How routing works
* How to send responses
* How to run your Node.js project


