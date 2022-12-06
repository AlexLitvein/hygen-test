const fs = require("fs");
const path = require("path");

const getSvgFilesContentArray = (srcFolder) => {
  const arrSvg = [];

  const walkFolder = (folderPath) => {
    const dirRes = fs.readdirSync(folderPath);
    dirRes.forEach((el) => {
      const currPath = path.join(folderPath, el);
      const stat = fs.statSync(currPath);
      if (stat.isDirectory()) {
        walkFolder(currPath);
      } else {
        const parseRes = path.parse(currPath);
        if (parseRes.ext === ".svg") {
          const str = fs.readFileSync(currPath, { encoding: "utf8" });
          const res = str
            .replace(/^<svg.*>$/gm, `<symbol id="${parseRes.name}">`)
            .replace(/^<\/svg>$/gm, "</symbol>");
          arrSvg.push(res);
        }
      }
    });
  };
  walkFolder(srcFolder);
  return arrSvg;
};

module.exports = {
  helpers: {
    getSvgFilesContentArray,
  },
};
