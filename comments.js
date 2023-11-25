// Create web server application
// 1. Import the express module
const express = require('express')
const bodyParser = require('body-parser')
// 2. Create an object of express
const app = express()
const port = 3000
// 3. Define a route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// 4. Start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

// 5. Create a route for /comments
app.get('/comments', (req, res) => {
    res.send('This is a route for /comments')
})

// 6. Create a route for /comments/:id
app.get('/comments/:id', (req, res) => {
    res.send('This is a route for /comments/:id')
})

// 7. Create a route for POST /comments
app.post('/comments', (req, res) => {
    res.send('This is a route for POST /comments')
})

// 8. Create a route for PUT /comments/:id
app.put('/comments/:id', (req, res) => {
    res.send('This is a route for PUT /comments/:id')
})

// 9. Create a route for DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
    res.send('This is a route for DELETE /comments/:id')
})

// 10. Create a route for /comments/:id/abuse
app.post('/comments/:id/abuse', (req, res) => {
    res.send('This is a route for /comments/:id/abuse')
})

// 11. Create a route for /comments/:id/abuse
app.post('/comments/:id/abuse', (req, res) => {
    res.send('This is a route for /comments/:id/abuse')
})

// 12. Create a route for /comments/:id/abuse
app.post('/comments/:id/abuse', (req, res) => {
    res.send('This is a route for /comments/:id/abuse')
})

// 13. Create a route for /comments/:id/abuse
app.post('/comments/:id/abuse', (req, res) => {
    res.send('This is a route for /comments/:id/abuse')
} ) 
