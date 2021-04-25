'use strict'
let uName = prompt('What is your name ?');
alert ('Welcome '+uName);
console.log('User name = '+uName);

let newAnime = prompt('which anime your watching these days ?');
alert (newAnime +' WOW good one !');
console.log('watching now = '+newAnime);

let favAnime = prompt('What is your favorite anime ?');
alert (favAnime+' Me too ');
console.log('fav anime is '+favAnime)

let seenAnime = prompt('Do you like Attack on Titans ? yes or no')
if (seenAnime == 'yes'){
    alert ('Hello '+uName+' I am watching '+newAnime+' too it is amazing and '+favAnime+' is my favorite anime just like you, '+seenAnime+' for Attack on Titans is a big like ' );
    console.log('Attck on titan seen = '+seenAnime);
}else{
    alert ('Hello '+uName+' I am watching '+newAnime+' too it is amazing and '+favAnime+' is my favorite anime just like you, '+seenAnime+' for Attack on Titans you should change your mind ' );
    console.log('Attck on titan seen = '+seenAnime);
}