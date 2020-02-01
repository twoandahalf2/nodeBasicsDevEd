const http = require(`http`)
const fs = require(`fs`)


const server = http.createServer((req, res) => {
    
    
    // console.log(req)
    if (req.url === '/') { res.write('<h1>this is also the homepage</h1>') }
    if (req.url === '/user') { res.write('<h1>hey vladi..</h1>') }
    res.write(`hello from the other side.. :)`)
    res.end()
})

server.listen(3000, () => console.log(`server just started`))