var twit = require('twit');
var config = require('./config.js');

var Twitter = new twit(config);

var frasePronta;

    //inicio

var inicios = ["tava no cursinho falando d", "bah, hoje eu vi ", "yall, eu tava pensando n", "literalmente me sentindo ", "yall! vós ouviveis que ", "bah hoje no cursinho "];

    //meio

var meios = ["a sandrinha", "o carro da sandrinha", "a mommy ufrgs", "o thiago berto", "as casas da italia", "a wine night", "o peso 1", "o peso 3", "o vestibular", "o potao", "o garoto do wifi"];

    //fim

var fins = [" com o doutor leonardo.", " com a doutora gabrielle.", " com a sandrinha.", "... bahhhhhh..", "... literalmente.", " neah", ".. ainda bem que é peso 1", "... o foda é que é peso 3...", "... matar-me-ei", " meooo"];


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

let fraseCompleta = function () {
    let nomes = ["o leonardo", "o cauã", "a gabrielle", "o doutor leonardo"];

    let mesoclises = ["faze-lo-ei"];

    let adjetivos = ["deusa"];

    let nome = nomes[Math.floor(Math.random() * nomes.length)];
    let mesoclise = mesoclises[Math.floor(Math.random() * mesoclise.length)];
    let adjetivo = adjetivos[Math.floor(Math.random() * adjetivos.length)];

    fraseComplete = ` Se ${nome} fizer tal coisa, ${mesoclise} também, como diria a ${adjetivo} sandrinha `;
    
    console.log(fraseComplete);
}

setInterval(fazerFrase, 100);
setInterval(writeTweet, 1800000);

setInterval(fraseCompleta, 300);
