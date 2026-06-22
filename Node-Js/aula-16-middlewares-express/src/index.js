const express = require('express')
const app =  express()



app.use(function (req, res,  next) {
    req.middlewareA = 'OK'

    next()
})

function middlewereB(req, res, next){
    req.middlewareB = 'OK'
    next()
}


app.get('/testA',(req, res) =>{
    console.log({a:req.middlewareA, b:req.middlewareB})
    res.end()
})

app.get('/testB',middlewereB,(req,res, next) =>{
    console.log({a:req.middlewareA, b:req.middlewareB})
    res.end()
   
})



const PORT = 3000

app.listen(PORT, ()=> console.log(`Servidor iniciado em http://localhost:${PORT}/`))