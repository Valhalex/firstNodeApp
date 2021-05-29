const fs= require('fs')
const process = require('process');

//read file at path and print
function cat(path){
    fs.readFile(path, 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          process.exit(1)
        }else{
        return console.log(data)
        }
    })
}

cat(process.argv[2])