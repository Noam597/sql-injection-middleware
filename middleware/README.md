# sql-injection-middleware


This express module detects sql syntax for injection attacks.
the module checks the body for any injection attacks sent 


## Installation

 $ npm install detect-sql-injection

## Usage

code example


`js
const express = require('express');
const app = express();
const detectSqlInjection = require('detect-sql-injection');


app.use(express.json());

app.use(express.urlencoded({extended:false}));

const port = 8000;



app.use(detectSqlInjection);


app.get('/',(req,res)=>{
    res.status(200).json({})
});

app.get('/:id',(req,res)=>{
    res.send("it works")
});

app.post('/',(req,res)=>{
    res.status(200).json({
        message:"syntax is clean"
    });
});

app.listen(port)
`