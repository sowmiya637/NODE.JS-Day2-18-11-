
# 🌐 Simple Node.js HTTP Server

This project demonstrates a **basic Node.js server** created using the built-in `http` module.  
When you run it, the server responds with:

```

Hello Sowmiya! Welcome to Node.js

```

---

## 📘 What is Node.js?

Node.js is a **JavaScript runtime** built on Chrome’s V8 engine.  
It allows JavaScript to run **outside the browser**, mainly used to build:

- Backend servers  
- APIs  
- Real-time applications (chat, notifications)  
- Command-line tools  

Node.js uses a **non-blocking, event-driven architecture**, making it ideal for scalable apps.

---

## 🧩 What is the HTTP Module?

Node.js includes a core module named **`http`**.

It allows you to:

- Create a server  
- Receive client requests  
- Send responses  
- Handle HTTP methods (GET, POST, etc.)

This project uses the `http` module to build a very simple server.

---

## 📂 Project Structure

```

project-folder/
│
└── server.js

````

---

## 📄 Code (server.js)

```js
// Simple Node.js App Example
const http = require('http');

// Create a simple server
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Sowmiya! Welcome to Node.js ');
});

// Start the server
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
````

---

## 🔍 How the Code Works

### 1️⃣ Importing the HTTP Module

```js
const http = require('http');
```

* Built-in module
* No need to install
* Used to create and manage servers

---

### 2️⃣ Creating the Server

```js
http.createServer((req, res) => { ... })
```

* `req` → incoming request (from browser)
* `res` → outgoing response (from server)

Inside this function:

#### ✔ Set response headers

```js
res.writeHead(200, {'Content-Type': 'text/plain'});
```

#### ✔ Send response

```js
res.end('Hello Sowmiya! Welcome to Node.js ');
```

---

### 3️⃣ Starting the Server

```js
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

* Runs server on port **3000**
* Open in browser → [http://localhost:3000](http://localhost:3000)

---

## 🌍 Global Installation Concepts

### 📌 What is a Global Installation?

In Node.js, a **global installation** means installing a package or tool so you can use it **from anywhere** on your system—no need to install inside a project.

Example:

```
npm install -g nodemon
```

After installing globally, you can run:

```
nodemon server.js
```

from any directory.

---

### 💡 Why Use Global Installation?

Global installs are useful for tools, not project dependencies:

| Use Globally | Use Locally                |
| ------------ | -------------------------- |
| CLI tools    | Libraries used inside code |
| Build tools  | Frameworks like Express    |
| Formatters   | Database clients           |

Examples of global tools:

* `nodemon` (auto-restarts server)
* `npm` (already global)
* `npx` (runs packages without installing)

---

## ▶️ Run the Project Locally

### 1️⃣ Install Node.js

Download from:
[https://nodejs.org/](https://nodejs.org/)

### 2️⃣ Run the server

```bash
node server.js
```

### 3️⃣ Open in browser

Visit:

```
http://localhost:3000
```

You should see:

```
Hello Sowmiya! Welcome to Node.js
```

---

## ⚡ (Optional) Use Nodemon Globally

Install:

```bash
npm install -g nodemon
```

Run:

```bash
nodemon server.js
```

This automatically restarts the server when files change.

---



* Using Node.js core modules
* Creating HTTP servers
* Sending responses
* Understanding global installation in Node.js
* Running local servers


