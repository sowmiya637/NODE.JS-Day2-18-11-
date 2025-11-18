
#  File Manager CLI (Node.js)

A simple Command-Line Interface (CLI) built using **Node.js**, **fs**, and **path** modules.  
This tool allows you to manage files and folders directly from the terminal using custom commands.

---

## 🚀 Features

This CLI tool supports the following operations:

| Command | Description |
|--------|-------------|
| `create-file <filename>` | Creates a new empty file |
| `create-folder <foldername>` | Creates a new folder |
| `delete-file <filename>` | Deletes a file |
| `read <filename>` | Reads and prints file content |
| `write <filename> <content>` | Overwrites the file with new content |
| `append <filename> <content>` | Adds content to the end of the file |
| `rename <oldname> <newname>` | Renames a file |
| `list` | Lists all files & folders in current directory |

---

## 📦 Installation

1. Make sure Node.js is installed  
2. Clone or download the repository  
3. Run the CLI using:

```

node index.js <command> <arguments>

```

---

## 📂 Project Structure

```

file-manager-cli/
│
├── index.js       # CLI logic
└── package.json   # Node project metadata

```

---

# 🧠 Concept Explanation

## 1️⃣ Node.js File System (fs module)

Node.js comes with a built-in **fs** module used to:

- Create files  
- Write and append text  
- Delete files  
- Read file content  
- Create folders  

This CLI internally uses:

- `fs.writeFileSync()`  
- `fs.readFileSync()`  
- `fs.unlinkSync()`  
- `fs.appendFileSync()`  
- `fs.renameSync()`  
- `fs.mkdirSync()`  
- `fs.readdirSync()`

---

## 2️⃣ process.argv – Handling CLI Arguments

`process.argv` gives the command-line arguments passed to Node.js.

Example:
```

node index.js create-file note.txt

````

Internally:
```js
const [,, command, ...args] = process.argv;
````

* `command` → `create-file`
* `args[0]` → `note.txt`

---

## 3️⃣ Synchronous File Operations

This project uses **Sync** versions (`writeFileSync`, `readFileSync`, etc.) because:

* Simpler for CLI tools
* Execution stops until operation completes
* No need for callbacks or promises

Perfect for small utilities.

---

# 🛠️ Usage Examples

## ➤ Create a file

```
node index.js create-file notes.txt
```

## ➤ Create a folder

```
node index.js create-folder myFolder
```

## ➤ Delete a file

```
node index.js delete-file notes.txt
```

## ➤ Read a file

```
node index.js read notes.txt
```

## ➤ Write (Overwrite) a file

```
node index.js write notes.txt "Hello World"
```

## ➤ Append text to a file

```
node index.js append notes.txt " More content"
```

## ➤ Rename a file

```
node index.js rename notes.txt info.txt
```

## ➤ List all items in folder

```
node index.js list
```

---

# 📝 Example Output

```
File created: notes.txt
Content of notes.txt:
Hello World
Renamed: notes.txt → info.txt
Files & Folders:
- index.js
- info.txt
- myFolder
```

---

# 📜 package.json

```json
{
  "name": "file-manager-cli",
  "version": "1.0.0",
  "main": "index.js",
  "license": "ISC"
}
```

---


* Node.js command-line input handling
* File system operations (`fs`)
* Using `process.argv` for commands
* Building a real-world CLI app


```
