/*
 * Loading sample product data
 *
 */

var argv = require('optimist')
    .usage('Usage: node $0 --baseurl <apiroot> --user <apiuser> --pass <apipass>')
    .argv;

var request = require('request');

var baseurl = (argv.baseurl || 'http://http://54.187.138.161:80');

var randomInt = function (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
};

function choice(s) {
    var choices = s.split('|');
    return choices[randomInt(0, choices.length)];
};

var productData = [
    "Grand Theft Auto V"| "games"| "00001"| 39.99| True, 
    "FIFA 14"| "games"| "00002"| 29.99| True,
    "Scary Monsters and Nice Sprites by Skrillex"| "music"| "00011"| 0.99| True,
    "I Know You Want Me by Pitbull"| "music"| "00012"| 0.50| True,
    "The Shawshank Redemption"| "movies"| "00021"| 9.99| True,
    "The Dark Knight"| "movies"| "00022"| 12.99| True
];

productData.forEach(function (s, i) {
    product = s.split('|')
    var data = {
        product_name: product[0],
        product_type: product[1],
        product_id: product[2],
        product_price: product[3],
        product_available: product[4]
  };
  url = baseurl + '/product';
  request.post({url: url, json: data}, function (err, res, body) {
        if (err) throw err;
        console.log('Adding user %s, HTTP response: %d', data.login, res.statusCode);
  });
});

//var json = JSON.stringify(eval("(" + str + + ")"));

