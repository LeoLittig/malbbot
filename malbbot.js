var twit = require('twit');
var config = require('./config.js');

var Twitter = new twit(config);

var frasePronta;

    //inicio

var inicios = ["bah, hoje eu vi ", "yall, eu tava pensando n", "literalmente me sentindo "];

    //meio

var meios = ["a sandrinha", "o carro da sandrinha", "a mommy ufrgs", "o thiago berto", "as casas da italia", "a wine night"];

    //fim

var fins = [" com o doutor leonardo.", " com a doutora gabrielle.", " com a sandrinha.", "... bahhhhhh..", "... literalmente.", " neah"];

var fazerFrase = function () {
    var inicio = inicios[Math.floor(Math.random() * inicios.length)];
    var meio = meios[Math.floor(Math.random() * meios.length)];
    var fim = fins[Math.floor(Math.random() * fins.length)];
    
    frasePronta = inicio + meio + fim;
    console.log(frasePronta);
}

    var writeTweet = function () {
       Twitter.post('statuses/update', {
            status: frasePronta
        }, function (err, data, response) {
            console.log(data);
           });
}

setInterval(fazerFrase, 100);
setInterval(writeTweet, 1800000);
