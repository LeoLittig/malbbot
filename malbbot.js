var twit = require('twit');
var config = require('./config.js');

var Twitter = new twit(config);

var frasePronta;

    //inicio

var inicios = ["tava no cursinho falando d", "bah, hoje eu vi ", "yall, eu tava pensando n", "literalmente me sentindo "];

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

    let mesoclises = ["faze-lo-ei", "não o farei"];

    let adjetivos = ["deusa", "incrível", "sábia"];

    let nome = nomes[Math.floor(Math.random() * nomes.length)];
    let mesoclise = mesoclises[Math.floor(Math.random() * mesoclises.length)];
    let adjetivo = adjetivos[Math.floor(Math.random() * adjetivos.length)];

    fraseCompleta = `Se ${nome} fizer tal coisa, ${mesoclise} também, como diria a ${adjetivo} sandrinha.`;
    
    console.log(fraseCompleta);
}

let fraseFixa = function () {
    let frasesFixas = ["yall, vocês viram que o chopp fechou?"];

    let fraseFixa = frasesFixas[Math.floor(Math.random() * frasesFixas.length)];

    console.log(fraseFixa);
}
setInterval(writeTweet, 3600000);

setInterval(fazerFrase, 100);
setInterval(fraseCompleta, 300);
setInterval(fraseFixa, 500);
