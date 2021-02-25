// Create an express app
const express = require('express');
const app = express();

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000
const server = http.createServer(app)

//Have the app route to root and print to the browser some sort of inspiring message.
app.get('/', (req,res) => {
    res.send(`
<!DOCTYPE HTML>
<html>
    <head>
        <title>Hello World</title>
    </head>
    <body>
        <h1>Hello World!</h1>
    </body>
</html>
`)
})

app.get('/cats', (req,res) => {
    res.json(`
    <!DOCTYPE HTML>
<html>
    <head>
        <title>Cat says whattttt</title>
    </head>
    <body>
        <h1>Meow</h1>
    </body>
</html>
    `)
})
app.get('/dogs', (req,res) => {
    res.send(`
    <!DOCTYPE HTML>
<html>
    <head>
        <title>Dog says whattttt</title>
    </head>
    <body>
        <h1>Woof</h1>
    </body>
</html>
    `)
})
app.get('/cats_and_dogs', (req,res) => {
    res.send(`
    <!DOCTYPE HTML>
<html>
    <head>
        <title>Combined</title>
    </head>
    <body>
        <h1>Living Together</h1>
    </body>
</html>
    `)
})


//Greet Route Params
app.get('/greet/:handle', (req,res) =>{
    const { handle } = req.params
    let name = handle.toUpperCase()
    res.send(`<h2>Hello, ${name}! </h1>`)
})

app.get('/year', (req,res) => {
    const { age } = req.query;
    const thisYear = 2021
    const calcAge = thisYear - parseInt(age,10)

    res.send(`
    <h1>You were born in ${calcAge} </h1>`)

})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})