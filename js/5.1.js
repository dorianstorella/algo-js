const readlineSync = require("readline-sync");


const tvSerie = {}

function askTvSerie() {

    tvSerie.name = readlineSync.question('What is the name of the tv show? ');

    tvSerie.productionYear = readlineSync.question(`In what year "${tvSerie.name}" began? `);

    tvSerie.cast = [];

    let askCast = true;
    while (askCast = true) {
        let castTemp = readlineSync.question('Give the name of one of the cast members. Enter "exit" to stop. ')

        if (castTemp === 'exit') {
            break;
        }

        tvSerie.cast.push(castTemp);

    }
}
askTvSerie();

console.log(tvSerie);