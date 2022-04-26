//Usando objeto express
const express=require('express')
//App de Express
const app=express()
//Puerto en que vamos a ver nuestra app: localhost:3000
const port=3000

//path inicial, responderá a la url localhost:3000
app.get('/', (req, res) =>{
    res.send('Hello World!')
})

//Respondiendo texto
//localhost:3000/launch
app.get('/launchx', (req, res) => {
    res.send('Bienvenidos a lunchx')
})

//Regresando un objeto
//localhost:3000/explorersInNode
app.get('/explorersInNode', (req,res)=>{
    const explorer={name:"Explorer", msg:"Hello"}
    res.send(explorer)
})