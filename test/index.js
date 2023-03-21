const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

const port = 8000

const detectSqlInjection = require('detect-sql-injection')

app.use(detectSqlInjection)


app.get('/',(req,res)=>{
    res.status(200).json({})
});

app.get('/:id',(req,res)=>{
    res.send("it works")
})
app.post('/',(req,res)=>{
    res.status(200).json({
        message:"syntax is clean"
    })
})

app.listen(port,()=>{
    console.log(`port ${port} is operational`)
})