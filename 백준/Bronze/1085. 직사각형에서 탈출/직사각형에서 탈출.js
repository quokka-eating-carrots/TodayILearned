var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");
const x = +input[0];
const y = +input[1];
const w = +input[2];
const h = +input[3];
const diff = [];
diff.push(x - 0);
diff.push(y - 0);
diff.push(w - x);
diff.push(h - y);
console.log(Math.min(...diff));