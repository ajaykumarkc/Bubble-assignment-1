const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database")

process.on("uncaughtException",(err) =>{
    console.log(`${err.message}`);
    console.log("Shutting down due to uncaught error");

    server.close(()=>{
        process.exit(1);
    }) 
})

dotenv.config({path:"backend/config/config.env"});

connectDatabase();

const server = app.listen(process.env.PORT,()=>{
    console.log(`server is running ${process.env.PORT} `);
})



process.on("unhandledRejection",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log("Shutting down due to unhandled promise rejection");

server.close(()=>{
    process.exit(1);
})
})