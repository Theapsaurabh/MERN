// 1: ---> Enter the file name
// 2: ---> Enter the Content in the File

import readline from "readline";
import fs from "fs"
import { error } from "console";

const rl= readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

 const fileCreation=()=>{
rl.question('Enter your file name', (filename)=>{
    rl.question('Enter the content in the file',(content)=>{
        fs.writeFile(`${filename}.txt`, content,(error)=>{
            if(error){
                console.log(`Error writing file: , ${error.message}`);
            }else{
                console.log(`File "${filename}.txt" Successfully Created`)
            }
            rl.close();
        })


    })

})
}

fileCreation()