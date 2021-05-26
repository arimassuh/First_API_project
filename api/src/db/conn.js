


                                          //Second file 







                            /*Its the mongodb time . open the mongodb compass and click connect 
                            */


//mongoose? to connect express application with the mongodb database
const mongoose= require ("mongoose")
mongoose.connect("mongodb://localhost:27017/olympics",{//so first we go to the mongodb compass appl,press connect,copy the localhost and paste here.
    useCreateIndex:true,//remember these promises i.e the conditions to connect a file to the mongodb database
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connecttion sucessful");//this is the confirmation of connection of mongoose file to the mongdb databse
}).catch((e)=>
{
    console.log("No connection");//if this mongoose file not connected to the databse, then this error
})


/*by the end of this file a console should be live in the chrome browser and in the console terminal,
these messages should be there "console is live at port no.3000", "connection sucessful"
*/