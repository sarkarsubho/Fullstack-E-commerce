const app =require("./index");
const connect = require("./configs/db");

app.listen(8000, async function(){
    try{
    await connect();
     console.log(`server is running in port 8000`)
    }catch(er){
        console.log(er)
    }
})
