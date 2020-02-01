const express = require(`express`)
const router = express.Router()


router.get('/', (req, res) => {
    res.send(`here are the users..`)
})

router.get('/specific', (req, res) => {
    res.send(`Specific user`)
})

module.exports = router