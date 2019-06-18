const express = require('express')
const app = express()
const localPort = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(process.env.PORT || localPort, () => console.log(`Example app listening on port ${localPort}!`))