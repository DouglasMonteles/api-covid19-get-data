const express = require('express');

const pdf = require('./app');

const app = express();

var document, cont = 1;

do {
    try {
        document = require('./test/target/va/form/covid19-' + data(cont) + '.json');
        cont++;
    } catch (err) {
        console.log(err);
    }
    cont++;

    if (data(cont) === '01.01.2019') {
        break;
    }
} while (!document);

function data(index) {
    var data = new Date();
        data.setDate(data.getDate() - index);

    var dia  = (data.getDate()).toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia;
        mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = data.getFullYear();

    return diaF+"."+mesF+"."+anoF;
}

pdf.downloadPDF();

app.get('/', (req, res) => {
    res.json(document);
});

app.listen(3000);