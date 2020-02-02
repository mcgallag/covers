const fs = require("fs");

function errorOut(err) {
  console.log("Error! " + err);
}

function main() {
  fs.promises
    .opendir("./assets")
    .then(dir => {
      let reading: boolean = true;
      while (reading) {
        dir
          .read()
          .then(dirent => {
            console.log(reading);
            if (dirent) {
              console.log(dirent.name);
            } else {
              reading = false;
            }
          })
          .catch(err => {
            console.log("Error " + err);
            reading = false;
          });
      }
    })
    .catch(errorOut);
}

main();
