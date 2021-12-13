const express = require('express')
const app = express()
const port = 3000
var requestIp = require('request-ip');
app.get('/', (req, res) => {
    // res.send('Hello World!')
    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    console.log({
        ip
    })
    var clientIp = requestIp.getClientIp(request);
    console.log(clientIp);
    res.send(clientIp)
    // fetch("https://ipinfo.io/json?token=3643b3284205a4").then(
    //     (response) => response.json()
    // ).then(
    //     (jsonResponse) => console.log(jsonResponse.ip, jsonResponse.country)
    // )
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})