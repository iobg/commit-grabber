const fetch = require('node-fetch')
const cheerio = require('cheerio')
let periods =["daily","halfweekly","weekly","monthly"]
periods.forEach((period)=>{
	fetch(`https://github.com/sscotth?tab=overview&period=${period}`)
    .then(function(res) {
        return res.text();
    }).then(function(body) {
       const $ = cheerio.load(body);
       console.log($(".text-emphasized").html());
    });
});
