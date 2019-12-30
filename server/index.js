const express = require('express');
const app = express();
const users = [
    {
        name: "Ejaz Hussain",
        age: 27
    },
    {
        name: "Faizan Zafar",
        age: 27
    },
    {
        name: "Musawir Turi",
        age: 27
    }
];
const girls = [
    {   name: "Mehvish",
        age: 20,
        id: 1
    },
    {   name: "Noor",
        age: 20,
        id: 2
    },
    {   name: "Anni",
        age: 20,
        id: 1
    }
]
app.get('/',(req, res) => {
    res.send("Welcome to Node Server")
})

app.get('/users', (req, res) => {
    res.json(users)
})

app.get('/users/:id', (req, res) => {
    let userParam = req.params.id;
    res.json(users[userParam])
})
app.listen(4000, ()=> {
    console.log("Ejaz Server has started listening at port : 4000")
});

app.get('/girls',(req, res) => {
    res.json(girls);
})

app.get('/girls/:id', (req, res) => {
    let girlParm =req.params.id;
    res.json(girls[girlParm])
})