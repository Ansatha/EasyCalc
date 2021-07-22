 INSTALACION
 
  1. Crea una nueva carpeta de projecto:
      $ mkdir easyCalc
  2. Asegurate de que estas logeado en npmjs.com con:
      $ npm login
  3. Accede a ella e inicia un proyecto  de npm:
      $ cd easyCalc
      $ npm init -f
  4. Y por último, instala el paquete 'myeasycalc':
      $ npm install myeasycalc

  Tras la correcta instalación estos archivos apareceran en tu carpeta:
    - package-lock.json
    - package.json
    - node_modules:
          package-lock.json
          myeasycalc:
              easyCalc.js
              easyCalc.ts
              package.json
              readme.md
              test.js
              test.ts
              virtualCalc.js
              virtualCalc.ts
 

 USO

  El paquete consta de dos clases:
    a.EasyCalc.
      Para utilizarla, es necesario importarla primero:
        import { EasyCalc } from 'ruta'
    
      La clase contiene los métodos (suma, resta, multiplicación y división),
      para realizar operaciones aritméticas básicas. Todos ellos esperan como
      argumento (opcional) un array de numeros con los que queremos operar y
      devuelven un valor resultado.
        
      Si no introducimos argumentos al invocar alguno de los métodos de
      cálculo aritmético, se realizará el cálculo entre dos numeros aleatorios.
        console.log(myObjetCalc.suma()); ==> Un numero aleatorio entre 0 y 18
        console.log(myObjetCalc.division([1200, 10, 6])); ==> 200

      Podemos invocar estos métodos instantiando o sin instanciar ningún objeto.
        console.log(myObjetCalc.resta([3, 2])) ==> 1
        console.log(EasyCalc.resta([3, 2])) ==> 1
      
      Con los métodos get y set se puede llamar o actualizar cualquier atributo.

      Por último, el método myObjetCalc.reset() elimina todos los valores
      almacenados i los inicializa a 0.
    

    b. VirtualCalc.
      Para utilizarla, es necesario importarla primero:
        import { VirtualCalc } from 'ruta'

      Esta clase tiene el método: pint() que requiere de un objeto tipo
      EasyCalc como argumento y nos muestra por pantalla los resultados con una
      estetica que emula una calculadora.
        myVirtualCalc(myObjetCalc)



 DESCRIPCION Y NOTAS DEL AUTOR.

 Este modesto projecto ha sido creado por motivos puramente didácticos y su
 limitada utilidad no pretende cubrir otras necesidades que la ya descrita
 al ser desarrollado.

 En este texto se describe extensivamente el funcionamiento del paquete.

 El paquete consta de una class (virtualCalc) que se encarga de maquetar los
 resultados por pantalla, un archivo (test) para probar todas las funcionalidades
 y otra class (easyCalc) que lleva el peso operativo del proyecto y que se
 describe a continuación:
   
 a. EasyCalc class permite la instanciación de objetos con las siguientes
 características:
   
    - Tres(3) atributos de tipo privado:
        1. result:number      -> Muestra el resultado de la última operación.
        2. historic:number[]  -> Muestra resultado de todas las operaciones.
        3. formats:string[][] -> Muestra el reultado actual en formatos bin
                                 ASCCI, hex y notación científica.

    - El constructor tiene un(1) solo argumento:number que es 0 por defecto.

    - Un(1) método privado: autoUpdate(:number):void para disparar los métodos
    encargados de actualizar el valor de los tres atributos.

    - Cuatro(4) métodos públicos:
        1. suma(:number[]):number      -> Un(1) argumento:number[] con (n ||
                                          default:2random) elementos, que se suman
                                          uno tras otro, disparan el método auto-
                                          Update y devuelve el resultado:number.
        2. resta(:number[]):number     -> Igual que el método suma, pero restando.
        3. multiplicacion " " " "      -> "     "   "  "      "     "multiplicando.
        4. division(:number[]):number  -> "     "   "  "      "     "   dividiendo.
                                            
    - Un(1) método público: reset():void que dispara los métodos necesarios para
    eliminar el contenido de los tres atributos e igualarlos a 0;

 b. Y además, permite llamar sin instanciar a:
                                            
    - Cuatro(4) métodos públicos static:
        1. suma(:number[]):number      -> Invocación sin instanciación. Un(1)
                                          argumento:number[] con (n || default:
                                          2random) elementos, que se suman uno
                                          tras otro y devuelve el resultado:number.
        2. resta(:number[]):number     -> Igual que el método suma, pero restando.
        3. multiplicacion " " " "      -> Igual que el método suma, pero restando.
        4. division(:number[]):number  -> Igual que el método suma, pero restando.