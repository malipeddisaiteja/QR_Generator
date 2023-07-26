import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
        message: "Enter URL: ",
        name: "URL"
    }
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream('qr.png'));  
    //console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log("Type Error\n"+error);
    } else {
      // Something else went wrong
      console.log(error);
    }
  });