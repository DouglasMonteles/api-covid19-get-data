const fs = require("fs");
const request = require("request-promise-native");

var code;
var cont = 0;

module.exports = {
    async downloadPDF() {
        do {
            code = 0;
            var pdfURL = "http://www.saude.df.gov.br/wp-conteudo/uploads/2020/03/Boletim-COVID_DF-" + data(cont) + ".pdf";
            var outputFilename = __dirname + "/test/pdf/va/form/" + "covid19-" + data(cont) + ".pdf";
            var pdfBuffer = await request.get({uri: pdfURL, encoding: null})
                .catch((err) => {
                    var { statusCode } = err;
                    code = statusCode || 0;
                    console.log(statusCode);
                });

            if (code !== 404) {
                console.log("Writing downloaded PDF file to " + outputFilename + "...");
                await fs.writeFileSync(outputFilename, pdfBuffer);
            }

            console.log(cont);
            console.log(code);
            console.log(data(cont));
            cont++;
        } while (code === 404);
    },
}

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