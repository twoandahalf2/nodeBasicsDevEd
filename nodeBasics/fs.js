const fs = require(`fs`)


const message = "this is line1\nthis is line2\nthis is line3\n"

fs.writeFile(`message.txt`, message, (err) => {
    if (err) throw err
    console.log(`file has been updated`)
})

fs.readFile(`./message.txt`, 'utf8', (err, data) => {
    if (err) throw err
    console.log(data)
})