const express = require('express');
const cors = require('cors');
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
];
const products = [
    {
        id: 1,
        imageUrl: "https://images.pexels.com/photos/3353994/pexels-photo-3353994.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "Title # 1",
        description: "This is description # 1",
    },
    {
        id: 2,
        imageUrl: "https://images.pexels.com/photos/2318555/pexels-photo-2318555.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "Title # 2",
        description: "This is description # 2",
    },
    {
        id: 3,
        imageUrl: "https://images.pexels.com/photos/3359742/pexels-photo-3359742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "Title # 3",
        description: "This is description # 3",
    },
    {
        id: 4,
        imageUrl: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 ",
        title: "Title # 4",
        description: "This is description # 3",
    },
    {
        id: 5,
        imageUrl: "https://images.pexels.com/photos/3171762/pexels-photo-3171762.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "Title # 5",
        description: "This is description # 3",
    },
    {
        id: 6,
        imageUrl: "https://images.pexels.com/photos/3363622/pexels-photo-3363622.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "Title # 6",
        description: "This is description # 3",
    },
    {
        id: 7,
        imageUrl: "https://images.pexels.com/photos/3348363/pexels-photo-3348363.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "Title # 7",
        description: "This is description # 3",
    },
    {
        id: 8,
        imageUrl: "https://images.pexels.com/photos/3319097/pexels-photo-3319097.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "Title # 8",
        description: "This is description # 3",
    },
    {
        id: 9,
        imageUrl: "https://images.pexels.com/photos/3359742/pexels-photo-3359742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "Title # 9",
        description: "This is description # 3",
    },
    {
        id: 10,
        imageUrl: "https://images.pexels.com/photos/3330175/pexels-photo-3330175.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "Title # 10",
        description: "This is description # 3",
    },
    {
        id: 11,
        imageUrl: "https://images.pexels.com/photos/3312671/pexels-photo-3312671.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "Title # 11",
        description: "This is description # 3",
    },
    {
        id: 12,
        imageUrl: "https://images.pexels.com/photos/2688991/pexels-photo-2688991.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "Title # 12",
        description: "This is description # 3",
    }
];
app.use(cors());
app.get('/',(req, res) => {
    res.send("Welcome to Node Server")
})
 
app.get('/users', (req, res) => {
    res.json(users)
})

app.get('/products', (req, res) => {
    res.json(products)
})
app.get('/products/:id', (req, res) => {
   let productId = req.params.id;
    res.send(products[productId])
})
app.get('/users/:id', (req, res) => {
    let userParam = req.params.id;
    res.send(users[userParam])
})

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log("Ejaz Server has started listening at port : ${port}....")
});

app.get('/girls',(req, res) => {
    res.json(girls);
})

app.get('/girls/:id', (req, res) => {
    let girlParm =req.params.id;
    res.json(girls[girlParm])
})