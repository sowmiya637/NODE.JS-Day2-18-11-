// scripts/watch-client.js
console.log('Watching client files (simulated). Save files to trigger rebuild...');
// simple interval to show it is "watching"
setInterval(() => {
  process.stdout.write('.');
}, 2000);
