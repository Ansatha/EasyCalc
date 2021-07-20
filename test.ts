import { EasyCalc } from "./easyCalc"
import { VirtualCalc } from "./virtualCalc"

let argum:number = 27;
let myCalc1:EasyCalc = new EasyCalc(argum);
console.log('\nInicialización de la calculadora con el argumento:', argum)
VirtualCalc.print(myCalc1);

let myCalc:EasyCalc = new EasyCalc();
console.log('\nInicialización de la calculadora sin argumento.' )
VirtualCalc.print(myCalc);

let suma:number[] = [2,3,5,7,11,13,17,19,23];
console.log('\nSumar:', suma);
myCalc.suma(suma);
VirtualCalc.print(myCalc);

console.log('\nSumar sin parametros.')
myCalc.suma();
VirtualCalc.print(myCalc);

let resta:number[] = [100,41,22,15,9,4];
console.log('\nRestar:', resta);
myCalc.resta(resta);
VirtualCalc.print(myCalc);

let mult:number[] = [5,3,20,5,9,2];
console.log('\nMultiplicar:', mult);
myCalc.multiplicacion(mult);
VirtualCalc.print(myCalc);

let div:number[] = [27000,2,9,5,20,3];
console.log('\nDividir:', div);
myCalc.division(div);
VirtualCalc.print(myCalc);

let num:number = 2022;
console.log('\nForzar el resultado a:', num);
myCalc.setResult(num);
VirtualCalc.print(myCalc);

console.log('\nReset de la calculadora.');
myCalc.reset();
VirtualCalc.print(myCalc);

console.log('Resultados de los métodos \'static\'.');
console.log('Sumar:', EasyCalc.suma(suma));
console.log('Restar:', EasyCalc.resta(resta));
console.log('Multiplicar:', EasyCalc.multiplicacion(mult));
console.log('Dividir:', EasyCalc.division(div));
