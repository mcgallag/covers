const fs = require("fs");
const basePath = "./assets";
const outputFile = "./assets.json";

let imageList = [];

function writeToFile(output) {
  let fd = fs.openSync(outputFile, "w");
  if (fd != -1) {
    let o = fs.writeSync(fd, JSON.stringify(output, null, 2));
    console.log(`${o} bytes written.`);
  } else {
    console.log("Something bad happened.");
  }
  fs.closeSync(fd);
}

function directoryHandler(dir) {
  let dirEntity;
  while ((dirEntity = dir.readSync()) != null) {
    if (dirEntity.isFile()) {
      imageList.push(`${dir.path}/${dirEntity.name}`);
    } else if (dirEntity.isDirectory()) {
      let nextDir = fs.opendirSync(`${dir.path}/${dirEntity.name}`);
      directoryHandler(nextDir);
    }
  }
}

function main() {
  let rootDir = fs.opendirSync(basePath);
  directoryHandler(rootDir);
  let output = {
    assets: imageList
  };
  writeToFile(output);
}

main();