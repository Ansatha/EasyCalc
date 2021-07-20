import { EasyCalc } from "./easyCalc";

export class VirtualCalc
{
    public input:EasyCalc;

    constructor (input:EasyCalc)
    {
        this.input = input;
    }

    public static print(inputObjet:EasyCalc):void
    {
        const digits = { "0": ["|⎺⎺⎺|", "|  /|", "|/  |", "|___|"],
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
        
        let input:string = inputObjet.getResult().toString();
        input.split('');
        let digitResult:string[] = [];
        for(let digitIndex:number = 0; digitIndex < 4; digitIndex++)
        {
            let lineSegment:string = "";
            for(let inputIndex:number = 0; inputIndex < input.length; inputIndex++)
            {
                lineSegment += (digits[input[inputIndex]][digitIndex] + ' '); 
            };
            digitResult.push(lineSegment);
        };

        let calc:string = "";
        let size:number = 80;
        
        /*CABECERA
        ⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺*/
        calc += ('|');
        for (let i = 0; i < size - 3; i++) {calc += ('⎺')};
        calc += ('|\n|                                   CASIO                                     |\n');
        calc +=    ('|      fx-570sp                                                               |\n');
        calc +=    ('|                                                                             |\n');
        /*_________________________________________________________________________________________________*/
        
        
        /*RESULTADO
        ⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺*/
        let resultMatrix:string[] = digitResult;
        let resultSize:number = resultMatrix[0].length;

        calc +=    ('|                                                                 Resultado   |\n');
        calc += ('|  |');
        for (let i = 0; i < size - 9; i++) {calc += ('⎺')};
        calc += ('|  |\n');
        for (let i = 0; i < 4; i++) //Se rrecorren los 4 elementos que conformar cada símbolo.                                                                           
        {                                                                           //Se calcula el tamaño
            calc += ('|  | ');                                                      //del string resultado
            for (let i = 0; i < size - (10 + resultSize); i++) {calc += (' ')};     //y se imprimen todos
            calc += resultMatrix[i];                                                //los ' ' excepto los  
            calc += ('|  |\n');                                                     //espacios que ocupa el
        };                                                                          //resultado.
        calc += ('|  |');
        for (let i = 0; i < size - 9; i++) {calc += ('_')};
        calc += ('|  |\n');
        /*_________________________________________________________________________________________________*/


        /*FORMATOS
        ⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺*/
        let formatsMatrix:string[] = [];
        
        for(let indexA in inputObjet.getFormats()) {
            for (let indexB in inputObjet.getFormats()[indexA]) {formatsMatrix.push(inputObjet.getFormats()[indexA][indexB]);}};
        let formatsSize:number = 0;
        calc += ('|');
        for (let i = 0; i < size - 3; i++) {calc += (' ')};
        calc += ('|\n');
        calc += ('|                                                                  Formatos   |\n');
        calc += ('|                                  |');
        for (let i = 0; i < size - 41; i++) {calc += ('⎺')}
        calc += ('|  |\n');

        calc += ('|                                  |');
        formatsSize = formatsMatrix[0].length;
        for (let i = 0; i < size - (48 + formatsSize); i++) {calc += (' ')};
        calc += (formatsMatrix[0] + " Bin  ");
        calc += (' |  |\n');

        calc += ('|                                  |');
        formatsSize = formatsMatrix[1].length;
        for (let i = 0; i < size - (48 + formatsSize); i++) {calc += (' ')};
        calc += (formatsMatrix[1] + " ASCII");
        calc += (' |  |\n');

        calc += ('|                                  |');
        formatsSize = formatsMatrix[2].length;
        for (let i = 0; i < size - (48 + formatsSize); i++) {calc += (' ')};
        calc += (formatsMatrix[2] + " Hex  ");
        calc += (' |  |\n');
        
        calc += ('|                                  |');
        formatsSize = formatsMatrix[3].length;
        for (let i = 0; i < size - (48 + formatsSize); i++) {calc += (' ')};
        calc += (formatsMatrix[3] + " n.Sci");
        calc += (' |  |\n');

        calc += ('|                                  |');
        for (let i = 0; i < size - 41; i++) {calc += ('_')};
        calc += ('|  |\n');
        /*_________________________________________________________________________________________________*/


        /*HISTORICO
        ⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺*/
        let historicMatrix:string[] = [];
        for(let index in inputObjet.getHistoric()) {historicMatrix.push(inputObjet.getHistoric()[index].toString())};
        let nHistorics:number = historicMatrix.length;
        
        calc += ('|');
        for (let i = 0; i < size - 3; i++) {calc += (' ')};
        calc += ('|\n');
        calc +=    ('|                                                                 Histórico   |\n');
        calc += ('|                                  |');
        for (let i = 0; i < size - 41; i++) {calc += ('⎺')}
        calc += ('|  |\n');
        for (let i = 0; i < nHistorics; i++)
        {
            calc += ('|                                  |');
            for (let j = 0; j < size - (42 + historicMatrix[nHistorics - (i+1)].length); j++) {calc += (' ')};
            calc += historicMatrix[nHistorics - (i+1)];
            calc += (' |  |\n');
        };
        calc += ('|                                  |');
        for (let i = 0; i < size - 41; i++) {calc += ('_')};
        calc += ('|  |\n');
        /*_________________________________________________________________________________________________*/
        
        
        /*PIE
        ⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺*/
        calc += ('|');
        for (let i = 0; i < size - 3; i++) {calc += ('_')};
        calc += ('|\n\n');
        /*_________________________________________________________________________________________________*/

        console.log(calc);
    };
};
