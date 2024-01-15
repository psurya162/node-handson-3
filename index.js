const express = require('express')

const app=express()
const PORT = 5000

const middleware1=(req,res,next)=>{
        console.log("Middlware 1 is Running")
        next()
}

const middleware2=(req,res,next)=>{
    console.log("Middleware 2 is Running")
    next()
}

app.get('/',middleware1,(req,res)=>{
    res.send("Home Page")
})

app.get('/Page',middleware2,(req,res)=>{
    res.send("This is Page")
})

app.listen(PORT,()=>{
    console.log(`The Server Is Running on PORT No ${PORT}`)
})
