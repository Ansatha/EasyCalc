"use strict";
exports.__esModule = true;
exports.VirtualCalc = void 0;
var VirtualCalc = /** @class */ (function () {
    function VirtualCalc(input) {
        this.input = input;
    }
    VirtualCalc.print = function (inputObjet) {
        var digits = { "0": ["|⎺⎺⎺|", "|  /|", "|/  |", "|___|"],
            "1": [" /|", "/ |", "  |", "  |"],
            "2": [" ⎺⎺⎺|", "    |", "|⎺⎺⎺ ", "|___ "],
            "3": [" ⎺⎺⎺|", "    |", " ⎺⎺⎺|", " ___|"],
            "4": ["|    ", "|   |", " ⎺⎺⎺|", "    |"],
            "5": ["|⎺⎺⎺ ", "|    ", " ⎺⎺⎺|", " ___|"],
            "6": ["|⎺⎺⎺ ", "|    ", "|⎺⎺⎺|", "|___|"],
            "7": [" ⎺⎺⎺|", "    |", "    |", "    |"],
            "8": ["|⎺⎺⎺|", "|   |", "|⎺⎺⎺|", "|___|"],
            "9": ["|⎺⎺⎺|", "|   |", " ⎺⎺⎺|", " ___|"],
            "A": [("|⎺⎺⎺|"), ("|   |"), ("|⎺⎺⎺|"), ("|   |")],
            "B": [("|⎺⎺⎺\\"), ("|   ⎠"), ("|⎺⎺⎺⎞"), ("|___/")],
            "C": [("|⎺⎺⎺ "), ("|    "), ("|    "), ("|___ ")],
            "D": [("|⎺⎺\\ "), ("|   ⎞"), ("|   ⎠"), ("|__/ ")],
            "E": [("|⎺⎺⎺ "), ("|    "), ("|⎺⎺  "), ("|___ ")],
            "F": [("|⎺⎺⎺ "), ("|    "), ("|⎺⎺  "), ("|    ")],
            "+": [" ", " ", "+", " "],
            "-": [" ", " ", "-", " "],
            "*": [" ", " ", "X", " "],
            "/": [" ", " ", "/", " "],
            "e": ["     ", " ___ ", "|___|", "|___ "],
            ".": [" ", " ", " ", "∎"],
            " ": ["  ", "  ", "  ", "  "]
        };
        var input = inputObjet.getResult().toString();
        input.split('');
        var digitResult = [];
        for (var digitIndex = 0; digitIndex < 4; digitIndex++) {
            var lineSegment = "";
            for (var inputIndex = 0; inputIndex < input.length; inputIndex++) {
                lineSegment += (digits[input[inputIndex]][digitIndex] + ' ');
            }
            ;
            digitResult.push(lineSegment);
        }
        ;
        var calc = "";
        var size = 80;
        /*CABECERA
        ⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺*/
        calc += ('|');
        for (var i = 0; i < size - 3; i++) {
            calc += ('⎺');
        }
        ;
        calc += ('|\n|                                   CASIO                                     |\n');
        calc += ('|      fx-570sp                                                               |\n');
        calc += ('|                                                                             |\n');
        /*_________________________________________________________________________________________________*/
        /*RESULTADO
        ⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺*/
        var resultMatrix = digitResult;
        var resultSize = resultMatrix[0].length;
        calc += ('|                                                                 Resultado   |\n');
        calc += ('|  |');
        for (var i = 0; i < size - 9; i++) {
            calc += ('⎺');
        }
        ;
        calc += ('|  |\n');
        for (var i = 0; i < 4; i++) //Se rrecorren los 4 elementos que conformar cada símbolo.                                                                           
         { //Se calcula el tamaño
            calc += ('|  | '); //del string resultado
            for (var i_1 = 0; i_1 < size - (10 + resultSize); i_1++) {
                calc += (' ');
            }
            ; //y se imprimen todos
            calc += resultMatrix[i]; //los ' ' excepto los  
            calc += ('|  |\n'); //espacios que ocupa el
        }
        ; //resultado.
        calc += ('|  |');
        for (var i = 0; i < size - 9; i++) {
            calc += ('_');
        }
        ;
        calc += ('|  |\n');
        /*_________________________________________________________________________________________________*/
        /*FORMATOS
        ⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺*/
        var formatsMatrix = [];
        for (var indexA in inputObjet.getFormats()) {
            for (var indexB in inputObjet.getFormats()[indexA]) {
                formatsMatrix.push(inputObjet.getFormats()[indexA][indexB]);
            }
        }
        ;
        var formatsSize = 0;
        calc += ('|');
        for (var i = 0; i < size - 3; i++) {
            calc += (' ');
        }
        ;
        calc += ('|\n');
        calc += ('|                                                                  Formatos   |\n');
        calc += ('|                                  |');
        for (var i = 0; i < size - 41; i++) {
            calc += ('⎺');
        }
        calc += ('|  |\n');
        calc += ('|                                  |');
        formatsSize = formatsMatrix[0].length;
        for (var i = 0; i < size - (48 + formatsSize); i++) {
            calc += (' ');
        }
        ;
        calc += (formatsMatrix[0] + " Bin  ");
        calc += (' |  |\n');
        calc += ('|                                  |');
        formatsSize = formatsMatrix[1].length;
        for (var i = 0; i < size - (48 + formatsSize); i++) {
            calc += (' ');
        }
        ;
        calc += (formatsMatrix[1] + " ASCII");
        calc += (' |  |\n');
        calc += ('|                                  |');
        formatsSize = formatsMatrix[2].length;
        for (var i = 0; i < size - (48 + formatsSize); i++) {
            calc += (' ');
        }
        ;
        calc += (formatsMatrix[2] + " Hex  ");
        calc += (' |  |\n');
        calc += ('|                                  |');
        formatsSize = formatsMatrix[3].length;
        for (var i = 0; i < size - (48 + formatsSize); i++) {
            calc += (' ');
        }
        ;
        calc += (formatsMatrix[3] + " n.Sci");
        calc += (' |  |\n');
        calc += ('|                                  |');
        for (var i = 0; i < size - 41; i++) {
            calc += ('_');
        }
        ;
        calc += ('|  |\n');
        /*_________________________________________________________________________________________________*/
        /*HISTORICO
        ⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺*/
        var historicMatrix = [];
        for (var index in inputObjet.getHistoric()) {
            historicMatrix.push(inputObjet.getHistoric()[index].toString());
        }
        ;
        var nHistorics = historicMatrix.length;
        calc += ('|');
        for (var i = 0; i < size - 3; i++) {
            calc += (' ');
        }
        ;
        calc += ('|\n');
        calc += ('|                                                                 Histórico   |\n');
        calc += ('|                                  |');
        for (var i = 0; i < size - 41; i++) {
            calc += ('⎺');
        }
        calc += ('|  |\n');
        for (var i = 0; i < nHistorics; i++) {
            calc += ('|                                  |');
            for (var j = 0; j < size - (42 + historicMatrix[nHistorics - (i + 1)].length); j++) {
                calc += (' ');
            }
            ;
            calc += historicMatrix[nHistorics - (i + 1)];
            calc += (' |  |\n');
        }
        ;
        calc += ('|                                  |');
        for (var i = 0; i < size - 41; i++) {
            calc += ('_');
        }
        ;
        calc += ('|  |\n');
        /*_________________________________________________________________________________________________*/
        /*PIE
        ⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺*/
        calc += ('|');
        for (var i = 0; i < size - 3; i++) {
            calc += ('_');
        }
        ;
        calc += ('|\n\n');
        /*_________________________________________________________________________________________________*/
        console.log(calc);
    };
    ;
    return VirtualCalc;
}());
exports.VirtualCalc = VirtualCalc;
;
