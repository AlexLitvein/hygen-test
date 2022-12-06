// import fs from "fs";
const fs = require("fs");
const path = require("path");

const srcFolder = "./app/media/";

const arrSvg = [];

// const walkFolder = (srcPath) => {
//   const dirRes = fs.readdirSync(srcPath);
//   dirRes.forEach((el) => {
//     const currPath = path.join(srcPath, el);
//     const stat = fs.statSync(currPath);
//     if (stat.isDirectory()) {
//       walkFolder(currPath);
//     } else {
//       const name = path.parse(currPath).name;
//       const str = fs.readFileSync(currPath, { encoding: "utf8" });
//       const res = str
//         .replace(/^<svg.*>$/gm, `<symbol id="${name}">`)
//         .replace(/^<\/svg>$/gm, "</symbol>");
//       arrSvg.push({ name, content: res });
//     }
//   });
// };
// walkFolder(srcFolder);

const srcFile = "./app/media/burger.svg";
const str = fs.readFileSync(srcFile, { encoding: "utf8" });

// const res = str.match(/(width="\d+").*(height="\d+").*(viewBox="[\d\s]*")/gm);
const matchOne = str.match(
  /(width="\d+").*(height="\d+").*(viewBox="[\d\s]*")/gm
);

const matches = str.matchAll(
  /(width="\d+") (height="\d+") (viewBox="[\d\s]*"){0,}/gm
);

// for (const match of matches) {
//   console.log(match);
// }

const arr1 = Array.from(matches, (m) => m).flat();
// const arr1 = Array.from(matches);

console.log({
  arrSvg,
  matchOne,
  arr1,
  // dirRes,
  // match,
  // base,
});
