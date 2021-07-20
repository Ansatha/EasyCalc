"use strict";
/*===============================================================================================
||                                    ↓ DESCRIPCION ↓                                          ||
=================================================================================================
 a. EasyCalc class permite la instanciación de objetos con las siguientes características:
   
    - Tres(3) atributos de tipo privado:
        1. result:number      -> Muestra el resultado de la última operación.
        2. historic:number[]  -> Muestra el histórico del resultado de todas las operaciones.
        3. formats:string[][] -> Muestra cada resultado del histórico en formato bin, ASCCI,
                                hex y notación científica.

    - El constructor tiene un(1) solo argumento:number que es 0 por defecto.

    - Un(1) método privado: autoUpdate(:number):void para disparar los métodos encargados
      de actualizar el valor de los tres atributos.

    - Cuatro(4) métodos públicos:
        1. suma(:number[]):number      -> Un(1) argumento:number[] con (n || default:2random)
                                          elementos, que se suman uno tras otro, disparan el
                                          método autoUpdate y devuelve el resultado:number.
        2. resta(:number[]):number     -> Igual que el método suma, pero restando.
        3. multiplicacion " " " "      -> "     "   "  "      "     "    multiplicando.
        4. division(:number[]):number  -> "     "   "  "      "     "    dividiendo.
                                            
    - Un(1) método público: reset():void que dispara los métodos necesarios para eliminar el
      contenido de los tres atributos e igualarlos a 0;

 b. Y además, permite llamar sin instanciar a:
                                            
    - Cuatro(4) métodos públicos static:
        1. suma(:number[]):number      -> Invocación sin instanciación. Un(1) argumento:number
                                          [] con (n || default: 2random) elementos, que se
                                          suman uno tras otro y devuelve el resultado:number.
        2. resta(:number[]):number     -> Igual que el método suma, pero restando.
        3. multiplicacion " " " "      -> Igual que el método suma, pero restando.
        4. division(:number[]):number  -> Igual que el método suma, pero restando.

=================================================================================================*/
exports.__esModule = true;
exports.EasyCalc = void 0;
/*=======================================================
||                     ↓ LOGICA ↓                      ||
========================================================*/
var EasyCalc = /** @class */ (function () {
    function EasyCalc(resultIni) {
        if (resultIni === void 0) { resultIni = 0; }
        this.result = resultIni;
        this.historic = [];
        this.formats = [];
        this.autoUpdate(resultIni); /* Se llama a este metodo para reinicializar los atributos
                                           historic y format con el valor inicial de result.    */
    }
    ;
    /*====================================================
      || Método para la actualización de los atributos. ||
      ==================================================*/
    EasyCalc.prototype.autoUpdate = function (result) {
        if (result === void 0) { result = 0; }
        this.result = (result);
        this.setHistoric(result); /* Actualización del valor del atributo historic.       */
        this.setFormats(result); /* "             "   "     "   "        formats.        */
    };
    ;
    /*================================================
      || Métodos getter & setter para los atributos ||
      ==============================================*/
    EasyCalc.prototype.setResult = function (result) {
        this.autoUpdate(result); /* Para cambiar el valor del atributo result, se dispara
                                           el método autoUpdate, cambiando así todos los atributos.*/
    };
    ;
    EasyCalc.prototype.getResult = function () {
        return this.result;
    };
    ;
    EasyCalc.prototype.setFormats = function (result) {
        var bin = result.toString(2);
        var ascii = "";
        result.toString().split('').forEach(function (digit, index) {
            ascii += (digit.charCodeAt(0).toString() + //:string[]. 2.Cada elemento
                (index < result.toString().split('').length - 1 ? //se transforma en su ascii.
                    " " : "")); //3.Se añade " " entre cada
        }); //ascii. 4.Parseo a :string.
        var hex = result.toString(16).toUpperCase();
        var nSci = result.toExponential();
        this.getFormats()[0] = [bin, ascii, hex, nSci];
    };
    ;
    EasyCalc.prototype.getFormats = function () {
        return this.formats;
    };
    ;
    EasyCalc.prototype.setHistoric = function (result) {
        this.getHistoric().push(result);
    };
    ;
    EasyCalc.prototype.getHistoric = function () {
        return this.historic;
    };
    ;
    /*========================================
      || Métodos de operaciones aritméticas ||
      ======================================*/
    EasyCalc.prototype.suma = function (input) {
        if (input === void 0) { input = [Math.round(Math.random() * 9), Math.round(Math.random() * 9)]; }
        var suma = input[0]; //Se recibe un argumento:number[n]
        for (var index = 1; index < input.length; index++) //o el default:number[randA,randB]
         { //Se suma cada elemento del [].
            suma += input[index];
        }
        ;
        this.autoUpdate(suma); //Se dispara el método y ademas se
        return suma; //devuelve el resultado.
    };
    ;
    EasyCalc.prototype.resta = function (input) {
        if (input === void 0) { input = [Math.round(Math.random() * 9), Math.round(Math.random() * 9)]; }
        var resta = input[0]; //Misma lógica que el método suma
        for (var index = 1; index < input.length; index++) //pero restando.
         {
            resta -= input[index];
        }
        ;
        this.autoUpdate(resta);
        return resta;
    };
    ;
    EasyCalc.prototype.multiplicacion = function (input) {
        if (input === void 0) { input = [Math.round(Math.random() * 9), Math.round(Math.random() * 9)]; }
        var mult = input[0]; //Misma lógica que el método suma
        for (var index = 1; index < input.length; index++) //pero multiplicando.
         {
            mult *= input[index];
        }
        ;
        this.autoUpdate(mult);
        return mult;
    };
    ;
    EasyCalc.prototype.division = function (input) {
        if (input === void 0) { input = [Math.round(Math.random() * 9), Math.round(Math.random() * 9)]; }
        var div = input[0]; //Misma lógica que el método suma
        for (var index = 1; index < input.length; index++) //pero dividiendo.
         {
            div /= input[index];
        }
        this.autoUpdate(div);
        return div;
    };
    ;
    /*======================================================
    || Método de reseteo del contenido de los atributos ||
    ====================================================*/
    EasyCalc.prototype.reset = function () {
        this.getHistoric().length = 0;
        this.getFormats().length = 0;
        this.setResult(0);
    };
    ;
    /*===================================================
      || Métodos de operaciones aritméticas tipo static||
      =================================================*/
    EasyCalc.suma = function (input) {
        if (input === void 0) { input = [Math.round(Math.random() * 9), Math.round(Math.random() * 9)]; }
        var suma = input[0];
        for (var index = 1; index < input.length; index++) {
            suma += input[index];
        }
        return suma;
    };
    ;
    EasyCalc.resta = function (input) {
        if (input === void 0) { input = [Math.round(Math.random() * 9), Math.round(Math.random() * 9)]; }
        var resta = input[0];
        for (var index = 1; index < input.length; index++) {
            resta -= input[index];
        }
        ;
        return resta;
    };
    ;
    EasyCalc.multiplicacion = function (input) {
        if (input === void 0) { input = [Math.round(Math.random() * 9), Math.round(Math.random() * 9)]; }
        var mult = input[0];
        for (var index = 1; index < input.length; index++) {
            mult *= input[index];
        }
        ;
        return mult;
    };
    ;
    EasyCalc.division = function (input) {
        if (input === void 0) { input = [Math.round(Math.random() * 9), Math.round(Math.random() * 9)]; }
        var div = input[0];
        for (var index = 1; index < input.length; index++) {
            div /= input[index];
        }
        return div;
    };
    ;
    return EasyCalc;
}());
exports.EasyCalc = EasyCalc;
;
