const $ = require('jquery');
const sayHello = () => console.log('hello');
const pokemon = require('pokemon');

sayHello("Hello");


$('body').css("background-color","yellow");
// const get = require('simple-get')
//
// get('http://example.com', function (err, res) {
//     if (err) throw err
//     console.log(res.statusCode) // 200
//     res.pipe(process.stdout) // `res` is a stream
//     window.location = 'http:example.com'
// })

console.log(pokemon.all());
//=> ['Bulbasaur', …]

console.log(pokemon.random());
$("body").text(pokemon.random());
//=> 'Snorlax'

pokemon.getName(147);
//=> 'Dratini'

pokemon.getId('Dratini');
//=> 147

