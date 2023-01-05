import express from "express"
const app = express()
const port = 3000
app.get('/', (req, res) => {
    res.send('<h1> Hej hej på er </h1>')
    
    
})
app.listen(port, () =>{
console.log(`Server has been started on port ${port}...`)
})
