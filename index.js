const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json());
const port = process.env.PORT || 5000;


app.get('/',(req, res)=>{
    res.send('Hello from My first  node.I am very Excited to learn Express.');
});

const users =[
    {id: 0, name: 'Sabana', email: 'shabana@gmail.com', phone: '017667778798'},
    {id: 1, name: 'Sabnoor', email: 'sabnur@gmail.com', phone: '017667778798'},
    {id: 2, name: 'Srabonti', email: 'srabonto@gmail.com', phone: '017667778798'},
    {id: 3, name: 'Suchorita', email: 'suchorita@gmail.com', phone: '017667778798'},
    {id: 4, name: 'Sonia', email: 'sonia@gmail.com', phone: '017667778798'},
    {id: 5, name: 'Susmita', email: 'susmita@gmail.com', phone: '017667778798'}

]
app.get('/users', (req, res) =>{
    const search = req.query.search;
    // use search query parameter
    if(search){
     const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
     res.send(searchResult);
    }
    else{
        res.send(users)  
    }
   
})

// app.METHOD
app.post('/users', (req, res) =>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
   // res.send(JSON.stringify(newUser))
   res.json(newUser)
})

// dynamic api
app.get('/users/:id', (req, res)=>{
    const id = req.params.id;
    const user = users[id]
    res.send(user);
    console.log(req.params.id);
})

app.get('/fruits', (req, res)=>{
    res.send(['mango', 'oranges', 'banana', 'apple']);
})

app.get('/fruits/mangoes/fazli', (req, res)=>{
    res.send('Yummy Yummy tok marka fazli');
})

app.listen(port, () =>{
    console.log('listening to port', port);
})