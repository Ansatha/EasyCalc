/*===============================================================================================
||                                    ↓ DESCRIPCION ↓                                          ||
=================================================================================================
 Este modesto projecto ha sido creado por motivos puramente didácticos y su limitada utilidad no
 pretende cubrir otras necesidades que la ya descrita al ser desarrollado.

 Consta de una class (virtualCalc) que se encarga de maquetar los resultados por pantalla, un
 archivo (test) para probar todas las funcionalidades y otra class (easyCalc) que lleva el peso
 operativo del proyecto y que se describe a continuación:
   
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