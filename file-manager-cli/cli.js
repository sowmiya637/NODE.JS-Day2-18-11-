const fs = require("fs");
const path = require("path");

// Get CLI arguments
const [,, command, ...args] = process.argv;

switch (command) {

  // Create File
  case "create-file":
    createFile(args[0]);
    break;

  // Create Folder
  case "create-folder":
    createFolder(args[0]);
    break;

  // Delete File
  case "delete-file":
    deleteFile(args[0]);
    break;

  // Read File
  case "read":
    readFile(args[0]);
    break;

  // Write File
  case "write":
    writeFile(args[0], args.slice(1).join(" "));
    break;

  // Append Text
  case "append":
    appendToFile(args[0], args.slice(1).join(" "));
    break;

  // Rename File
  case "rename":
    renameFile(args[0], args[1]);
    break;

  // List Files & Folders
  case "list":
    listItems();
    break;

  default:
    console.log(" Unknown command!");
    console.log("Try: create-file | create-folder | delete-file | read | write | append | rename | list");
}


// -------------------- FUNCTIONS ----------------------

function createFile(fileName) {
  fs.writeFileSync(fileName, "");
  console.log(` File created: ${fileName}`);
}

function createFolder(folderName) {
  fs.mkdirSync(folderName);
  console.log(` Folder created: ${folderName}`);
}

function deleteFile(fileName) {
  fs.unlinkSync(fileName);
  console.log(` File deleted: ${fileName}`);
}

function readFile(fileName) {
  const data = fs.readFileSync(fileName, "utf-8");
  console.log(` Content of ${fileName}:`);
  console.log(data);
}

function writeFile(fileName, content) {
  fs.writeFileSync(fileName, content);
  console.log(` File overwritten: ${fileName}`);
}

function appendToFile(fileName, content) {
  fs.appendFileSync(fileName, content);
  console.log(` Content appended to: ${fileName}`);
}

function renameFile(oldName, newName) {
  fs.renameSync(oldName, newName);
  console.log(` Renamed: ${oldName} → ${newName}`);
}

function listItems() {
  const items = fs.readdirSync(process.cwd());
  console.log(" Files & Folders:");
  items.forEach(item => console.log(`- ${item}`));
}
