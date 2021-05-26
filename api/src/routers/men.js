


                                            //fourth file



                    /*Its the postman time . open postman create new collection , click add new request
                    its obvious that the postman reuest will ask for the url where all the CRUd operations 
                    should be performed. so type "localhost:3000/mens" so it will be easy for the request 
                    to find the collection we have ceated in the mens.js file 
                    */

//this is the API crud file 
const express = require ("express");//took the express to get the express router function
const router = new express.Router();//now we have a router which has the object of the localhost CRUD is workable now

const MensRanking = require("../models/mens");/*we can simply say that hey this shit is the path , if you find any 
variable like this this then we can use this shchema in this file.*/




                                

/*we will handle post req. here, add a new request name it "createmens add the localhost:3000 in the url,
come to body->raw->json and add the new user details here, select it as a post request and save it and 
after this code send it */
router.post("/mens", async (req , res)=>{//this will post newly created files to the databse 

    try{  
        
       const addingMensRecords = new MensRanking(req.body)//taking every new player in the adddningMensRecords variable 
       console.log(req.body);//printing the ne w file in the console if added recently on running the console 
       const insertMens =  await addingMensRecords.save({new:true});//saving the record in the databse 

       res.status(201).send(insertMens);/* to confirm that new user details are stord  in the database so we can see it in  the postman 
       and by default its status is 200 which is an "OK" state so set the status code 201 which is a "CREATED" state while creating 
       or adding new values
*/
    }
    catch(e){
    res.status(400).send(e); // if again entered the same player, then 404 error in the postman
    }
    
    })



    
//we will handle get req. here create a new req "getmens" add the localhost:3000 in the url and select get,save and send
router.get("/mens", async (req , res)=>{//instead of adding players, now we want to access all the players present in our database

    try{  
        
       const getMens = await MensRanking.find({}).sort({"ranking":1});/*added a find function to find every particular 
       mensranking player added to the databse  and storing it by an attribute*/
       res.send(getMens);//send every player detail to the postman
    }catch(e){
    res.status(400).send(e); //Exceptions
    }
    
    })//after performing this operation, come at the crome and type "localhost:3000/mens"




//we will handle get req of indiv
router.get("/mens/:id", async (req , res)=>{

try{  
    const _id = req.params.id;//requested an id from the postman, and saved it in a variable 
   const getMen = await MensRanking.findById(_id);/*asked the database to find the id stored in this variable  and stored tht
   id's details in a variable */
   res.send(getMen);//sended that found detial of the particualar player and sended it to the postman
}catch(e){
res.status(400).send(e); //EXCEPTION
}

})


//we will handle patch req of indiv for the updation purposes
router.patch("/mens/:id", async (req , res)=>{

    try{  /*before this mongo, postman->patchd collection with an obvio name should be already opened
        */
        const _id = req.params.id;//reqested an id from the postman and saved it in a variable
       const getMen = await MensRanking.findByIdAndUpdate(_id,req.body,{new:true});/*we have a id lying on the postman now 
       and finding the id in the database and saying that look this is the id,attached with this schema 

       if you find the id , oh legendary database  please send that player detail and we will store it in a variable  */

       res.send(getMen);/*haha we have a player detial variable now. Now, we opened the postman and the player id we copied 
       form the databse?yeah? we copied the player id from the databse right and now we wanna update it ,.Pasted the id in 
       the patch file,

       and now the moment we clicked send , this function will be called and we will expect the player datails in the postman
       BUT,....how to update??!   .  In the postman we have the player detials now right? look around we will see BODY open it 
       then raw>select json(format). Now copy any attribute of that player from the databse and paste it in the postman in the 
       curly braces change it a little bit.The moment we clicked send, ........BOOM.... all the data will be updated.
       How to check?open the databse dude.

       (Just a reminder, look at the second line above "req.body" why this? to request the body we created from the postman)
       */
    }catch(e){
    res.status(500).send(e);/*EXCEPTION*/
    }
    
    })

    //we will handle DELETE req of indiv
router.delete("/mens/:id", async (req , res)=>{//ofc requesting an id from the database

    try{  /*before this, mongo,postman,shpuld be already opened*/
       const getMen = await MensRanking.findByIdAndDelete(req.params.id);/*simple we are directly requesting an id 
       without storing into a variable like before. Attaching this random id from the postman to the schema, and using the function 
       to find the id if present in the databse and delete it
        
       haha as it is deleted we will not be able to store any detail in the getmen varaible. So we can't find it in the postman
       even if we performed re.send("variable*) because it will be sended empty to the postman
       
       So MORAL of the STORY  we are giving supaari to the databse that see,..... we are giving an random id from the postman
        , if you have it , then please send it to the vs code mafia and he kills that id and then we request the vs code that if 
        you got the user  please send him to the postman.. BUT ,  he just killed it so ,  we dont get any player in the 
        postman  */
       res.send(getMen);//Empty variable going to the postman.
    }catch(e){
    res.status(500).send(e); //EXCEPTION. 
    }
    
    })

    module.exports= router;/*All the operations are over so lets go to the app */



    /*By the end of this file all the RESTFUL api CRUD operationas should be performed */









