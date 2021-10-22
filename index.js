const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors())
app.use(express.json())
const port = process.env.PORT || 5000;

const handler = (req,res)=>
{
    res.send('TESLA CLINIC ONE STOP SLUTION YO NIKKU COME')
}


const users = [

    {id:'1',
name:'SIMANTO',
email:'rafat40388@gamil.com',
bloodgrp:'AB+',age:27},

{id:'2',
name:'Anika',
email:'anika123@gamil.com',
bloodgrp:'B+',age:24},

{id:'003',
name:'Rafat',
email:'rafat123@gamil.com',
bloodgrp:'AB+',age:27},

{id:'004',
name:'Nikku',
email:'nikku123@gamil.com',
bloodgrp:'B+',age:24}

]
app.get('/',handler);

app.get('/users',(req,res)=>
{ 
    const search = req.query.search;
    console.log(search);
    if (search)
    {
      const searchresult = users.filter(user => 
        user.name.toLocaleLowerCase().includes(search)|| user.id.toLocaleLowerCase().includes(search))

        res.send(searchresult)
    }
    else{
        res.send(users)
    }
   
})

app.get('/users/:id',(req,res)=>
{   
    const index = req.params.id;
   const user= users.filter(user=> user.id.toLocaleLowerCase().includes(index))
   res.send(user)
})

app.post('/users',(req,res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('Successfull',req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

app.listen(port,()=>
{
    console.log(`listening at http://localhost:${port}`);
})