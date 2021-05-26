

                                                    //First file 




/*Installing Dependencies

/*first step is intall package.json file if not installed so go to the terminal(ctrl+`) and type "npm init -y"{we have
to store the dependencies like nodemon, express and mongoose right so package.json is mandatory

now in the termianl, install this short-cut maker "npm install -g nodemon"

second step express instllation for creating a localhost so "npm i localhost"

third mongoose installation for mongodb to localhost connection so type "npm i mongoose"

(note : once we have installed the json files we can check them in the package.json file in the "dependencies" section)


                                        Using short cuts in json (scripts)
Step 1: "start" :"node src/app.js",
        "dev": "nodemon src/app.js" *and save it *


                                        creating files and folders

create a folder with whatever name say "mens100m" and save at the desktop (This is the main folder)
inside the main folder, create a "src folder" (This will include all the coded files)
inside the src folder create 3 folders and name it "db", "models", "routers" and create a main file/express server name "app.js"
inside db, create "conn.js" which will connect the mongodb databse to the server.
inside models, create "mens.js" which will make the schemas .
inside the routers, create "men.js"  where api CRUD operations will be performed.


                                         to use shortcut of "nodemon src/app.js"?

"npm run dev "                    haha thats why nodemon is supercool
                                        

*/




//express? to create a express application i.e a localhost
const express = require("express");
const app =  express(); 

                                //ignore below code until the second file(conn.js) coding is completed.

require("../src/db/conn");//conn.js ko idhar leke aagya bas.

                                //ignore below file until the fourth file(men.js) coding is completed.

const router = require("./routers/men");/*hey look this path and if you find this router variable , then that means
that it may have done some tasks which is olny the Router() is capable of anyway now its connected*/

                            //ignore below code until third file(mens.js) coding is completed.

const MensRanking = require("../src/models/mens");/* . So hey look, we are giving this path 
if you find this varaible then that means that it may have stored some schema collection shit in that file  

so why using it here ? dude when we open our app or say localhost:3000/mens all the players details will be in that schema
format only so we need this colletion shit cool?*/


const port = process.env.PORT || 3000;//the live port is runnig at port 3000  so naming the localhost as "port" variable

app.get("/",async (req,res)=>{
    res.send("Hello from the thapa")// sending a message to the localhost i.e its a respone if we open the server 
    })
    
    app.listen(port, ()=>       //we are saying hey app/express varaible if you listen to this port,
        {
            console.log(`console is live at port no.${port}`) // confirm it by printing it on the terminal
        })
    
 
                  //ignore below file until the fourth file(men.js) coding is completed.

app.use(express.json());//in the post man we will add our every new user details code in body->raw->json format 

                 //ignore below file until the fourth file(men.js) coding is completed.

app.use(router);/*using this as an obejct of app.js i.e using it to perform crud operations. Actually this dude 
is saying that hey take this router im allowing this router to perform the crud operations and I am expecting this router to 
be back when all the operations are over */


 
/*by the end of this file a localhost:3000 should be opened in the chrome browser and the "console 
is live at 3000" message should be present in the console terminal  */


