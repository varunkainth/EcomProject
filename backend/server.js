const app = require('./app')
const dotenv = require('dotenv')
const connectionDataBase = require('./config/database')

//Handling Uncaught Exception
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting Down the Server due to Uncaugth Exception`);
    process.exit(1);
})


//config
dotenv.config({path:'backend/config/config.env'})

// connecting data base
connectionDataBase()

 port = process.env.PORT


const server = app.listen(port, ()=>{
    console.log(`server is running at http://localhost:${port}`)
})


//unhandled promise Rejection
process.on("unhandledRejection",err=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to unahndled Promise Rejection`);
    server.close(()=>{
        process.exit(1);
    })
})
