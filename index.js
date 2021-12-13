const express = require('express')
const fetch = require('node-fetch');
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());
const port = 3000;
class DataCache {
    constructor(fetchFunction, minutesToLive = 10) {
        this.millisecondsToLive = minutesToLive * 60 * 1000;
        this.fetchFunction = fetchFunction;
        this.cache = null;
        this.cachedIPs = {};
        this.getData = this.getData.bind(this);
        this.resetCache = this.resetCache.bind(this);
        this.isIPCached = this.isIPCached.bind(this);
        this.fetchDate = new Date(0);
    }
    isIPCached(clientIp) {
        console.log('option 1', this.cachedIPs[clientIp] !== undefined)
        if (this.cachedIPs[clientIp] !== undefined) {
            console.log('option 2', (this.cachedIPs[clientIp].fetchDate.getTime() + this.millisecondsToLive) < new Date().getTime())

        }
        // cached && ! expired
        return this.cachedIPs[clientIp] !== undefined && !((this.cachedIPs[clientIp].fetchDate.getTime() + this.millisecondsToLive) < new Date().getTime())
    }
    getData(clientIp) {
        if (!this.isIPCached(clientIp)) {
            console.log('expired - fetching new data');
            return this.fetchFunction(clientIp)
                .then((data) => {
                    this.cachedIPs[clientIp] = {
                        fetchDate: new Date(),
                        data: data,
                    };
                    return data;
                });
        } else {
            console.log('cache hit');
            return Promise.resolve(this.cachedIPs[clientIp].data);
        }
    }
    resetCache() {
        this.cachedIPs = {};
    }
}

function getClientIP(expressRequest) {
    let clientIp = expressRequest.headers['x-forwarded-for'] || expressRequest.socket.remoteAddress;
    if (clientIp.substr(0, 7) == "::ffff:") {
        clientIp = clientIp.substr(7)
    }
    return clientIp;
}

function getClientIPInfo(clientIp) {
    return new Promise((resolve, reject) => {
        fetch(`https://ipinfo.io/${clientIp}?token=3643b3284205a4`).then(
            (response) => response.json()
        ).then(
            (jsonResponse) => {
                resolve(jsonResponse)
            }
        ).catch(error => reject(error))
    })
}
const ipDataCache = new DataCache(getClientIPInfo, 10);

const regions = [

    {
        name: 'Europe',
        slug: 'eu',
        isDefault: true,
        languages: [
            'en',
            'fr',
        ]
    },
    {
        name: 'Asia',
        slug: 'as',
        isDefault: false,
        languages: [
            'ar',
            'en',
            'fr',
        ]
    },
    {
        name: 'USA',
        slug: 'us',
        isDefault: false,
        languages: [
            'en',
            'es',
        ]
    },
];

function isAmericaCountry(countryCode) {
    return ['CA', 'US', 'MX', 'BR', 'GL', 'AI', 'AG', 'AW'
        , 'BS'
        , 'VE'
        , 'AR'
    ].includes(countryCode.toUpperCase())
}

function isAsiaCountry(countryCode) {
    return ['LB', 'SY', 'AE', 'SA', 'TR', 'CN', 'HK', 'IN'].includes(countryCode.toUpperCase())
}
app.get('/', (req, res) => {
    console.log('req.cookies', req.cookies);

    const preferedLang = req.cookies.lang;
    // res.send('Hello World!')
    const clientIp = getClientIP(req);
    ipDataCache.getData(clientIp)
        .then((result) => {
            // do some stuff with result
            console.log('result', result);
            if (isAmericaCountry(result.country)) {
                const region = regions.find(region => region.slug === 'us')
                if (region.languages.includes(preferedLang)) {
                    res.redirect(`/us-${preferedLang}`)
                } else {
                    res.redirect(`/us-en`);
                }
            } else if (isAsiaCountry(result.country)) {
                const region = regions.find(region => region.slug === 'as')
                if (region.languages.includes(preferedLang)) {
                    res.redirect(`/as-${preferedLang}`)
                } else {
                    res.redirect(`/as-ar`);
                }
            } else {
                const region = regions.find(region => region.slug === 'eu')
                if (region.languages.includes(preferedLang)) {
                    res.redirect(`/eu-${preferedLang}`)
                } else {
                    res.redirect(`/eu-fr`);
                }
            }
        });
})
regions.forEach(region => {
    app.get(`/${region.slug}`, function (req, res) {
        console.log('req.cookies', req.cookies)
        const preferedLang = req.cookies.lang;
        if (region.languages.includes(preferedLang)) {
            res.redirect(`/${region.slug}-${preferedLang}`)
        } else {
            res.redirect(`/${region.slug}-${region.languages[0]}`)
        }
    })
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})