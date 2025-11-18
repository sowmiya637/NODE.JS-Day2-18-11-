

# 🚀 Advanced Node.js Server with Build & Dev Workflow

This project demonstrates a **Node.js server** with a professional **development workflow**, including:

- Environment variables (`NODE_ENV`, `PORT`)
- Global & local scripts
- Development mode with auto-reload
- Client build script
- Watch script for client files
- NPM lifecycle scripts (`prebuild`, `postbuild`)
- Tools like `cross-env`, `concurrently`, and `nodemon`

---

# 📁 Project Structure

```

myapp/
│
├── server.js
├── package.json
│
├── scripts/
│   ├── build-client.js
│   └── watch-client.js
│
└── dist/ (created after build)

````

---

# 📄 1. Server Code (server.js)

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end(`Hello from ${process.env.NODE_ENV || 'development'} server\n`);
});

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port} (NODE_ENV=${process.env.NODE_ENV})`);
});
````

## 🔍 What this code does

### ✔ Creates an HTTP server

Using Node.js native `http` module (no Express required).

### ✔ Uses Environment Variables

`process.env.NODE_ENV` → tells the server whether it is in **development** or **production**.
`process.env.PORT` → allows deploying on platforms like Render, Vercel, Heroku.

### ✔ Sends Dynamic Output

Example output:

```
Hello from development server
```

---

# 📄 2. Package.json Scripts

```json
"scripts": {
  "start": "cross-env NODE_ENV=production node server.js",
  "dev": "cross-env NODE_ENV=development concurrently \"nodemon server.js\" \"npm run watch-client\"",
  "watch-client": "node scripts/watch-client.js",
  "build": "npm run prebuild && cross-env NODE_ENV=production node scripts/build-client.js && npm run postbuild",
  "prebuild": "npm run lint",
  "postbuild": "echo \"Build finished at $(date)\"",
  "lint": "echo \"linting... (simulated)\"",
  "test": "node test/test.js"
}
```

---

# 🧠 Concepts Explained

## 1️⃣ **Environment Variables**

Environment variables store values that change between environments.

Examples:

* `development`
* `production`
* Cloud-specific PORT numbers

Used via:

```js
process.env.NODE_ENV
process.env.PORT
```

### Why important?

* In production → optimized builds, fewer logs
* In development → debugging, live reload

---

## 2️⃣ **NODE_ENV**

A special environment variable used to control app behavior.

| Value         | Meaning                                    |
| ------------- | ------------------------------------------ |
| `development` | Local machine, logs, debugging, hot reload |
| `production`  | Deployment mode, optimized, no dev tools   |

Example:

```
NODE_ENV=production node server.js
```

---

## 3️⃣ **cross-env**

Different OS handle environment variables differently (Windows vs Mac/Linux).

`cross-env` makes this compatible:

```
cross-env NODE_ENV=development node server.js
```

Without it, scripts break on Windows.

---

## 4️⃣ **nodemon**

A development tool that **automatically restarts the server** when files change.

Used in:

```
"dev": "nodemon server.js"
```

Helpful during local development.

---

## 5️⃣ **concurrently**

Runs multiple NPM scripts **at the same time**.

Example from your project:

```
concurrently "nodemon server.js" "npm run watch-client"
```

This means:

* Server auto-reloads
* Client watcher runs simultaneously

---

# 📄 3. Build Script (scripts/build-client.js)

```js
const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(dist)) fs.mkdirSync(dist);
fs.writeFileSync(path.join(dist, 'index.html'), '<!doctype><html><body><h1>Built App</h1></body></html>');

console.log('✅ Client built → dist/index.html created');
```

### ✔ Purpose

Simulates a "build process" like React/Angular/Vite.

Creates:

```
dist/index.html
```

This represents compiled client code.

---

# 📄 4. Watch Script (scripts/watch-client.js)

```js
console.log('Watching client files (simulated). Save files to trigger rebuild...');
setInterval(() => {
  process.stdout.write('.');
}, 2000);
```

### ✔ Purpose

Simulates file watching (like Webpack, Vite, Parcel).

Every 2 seconds prints:

```
.
```

---

# 🛠️ NPM Script Flow

### ▶ Development Mode

```
npm run dev
```

Runs:

* Node server (auto reload)
* Client watcher

### ▶ Production Mode

```
npm start
```

Runs:

* Node server in `production` mode

### ▶ Build Client

```
npm run build
```

Process:

1. `prebuild` → linting
2. Build client → create `/dist/index.html`
3. `postbuild` → show message with timestamp

---

# ▶ How to Run the Project

### 1️⃣ Install dependencies

```
npm install
```

### 2️⃣ Development mode

```
npm run dev
```

### 3️⃣ Build the client

```
npm run build
```

### 4️⃣ Start production server

```
npm start
```

### 5️⃣ Open in browser

```
http://localhost:4000
```

---



* HTTP server with environment variables
* Automatic server reload in development
* Parallel script execution
* Build automation
* File watching
* `NODE_ENV` usage
* Proper cross-platform environment setup
