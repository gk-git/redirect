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
    var clientIp = requestIp.getClientIp(req);

    if (clientIp.substr(0, 7) == "::ffff:") {
        clientIp = clientIp.substr(7)
    }
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