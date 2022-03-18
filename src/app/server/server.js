const express=require('express');
const bosyParser =require ('body-parser');
const port =3000;

const app=express()

app.use(bosyParser.json())

app.get('/', (req,res)=>{
    res.send("This is from Server")
})

app.listen(port,()=>{
    console.log("server is running on port " + port);
})