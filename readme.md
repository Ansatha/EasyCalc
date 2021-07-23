<h1>INSTALACION
<br>
<h5>
 <p>
 <ol>
  <li>Creación de una nueva carpeta de projecto:
   <div class = class="snippet-clipboard-content position-relative"><pre><code>$ mkdir easyCalc</code></pre></div>
  <li>Hacer/comprobar login en npmjs.com:
   <div class = class="snippet-clipboard-content position-relative"><pre><code>$ npm login</code></pre></div>
  <li>Iniciar un proyecto de npm:
   <div class = class="snippet-clipboard-content position-relative"><pre><code>$ cd easyCalc</code></pre></div>
   <div class = class="snippet-clipboard-content position-relative"><pre><code>$ npm init -f</code></pre></div>
  <li>Y por último, instalación del paquete 'myeasycalc':
   <div class = class="snippet-clipboard-content position-relative"><pre><code>$ npm install myeasycalc</code></pre></div>
 </ol>
 </p>
 <p><div>Tras la correcta instalación estos archivos apareceran en la carpeta:</div></p>
 <h7><p>
  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;package-lock.json</div>
  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;package.json</div>
  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;node_modules:</div>
  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;package-lock.json</div>
  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;myeasycalc:</div>
  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;easyCalc.js</div>
  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;easyCalc.ts</div>
  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;package.json</div>
  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;readme.md</div>
  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;test.js</div>
  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;test.ts</div>
  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;virtualCalc.js</div>
  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;virtualCalc.ts</div>
 </p>
<br>
<h1>USO
<br>
<h5>
 <p><h3><div>El paquete consta de dos clases:</div></h3>
 <ol>
  <h3><li><div>EasyCalc class.</div></h3>
   <div>Para utilizarla, es necesario importarla primero:</div>
   <div class = class="snippet-clipboard-content position-relative"><pre><code>import { EasyCalc } from './node_modules/myeasycalc/easyCalc'</code></pre></div>
   <div>La clase contiene los métodos (suma, resta, multiplicación y división),</div>
   <div>para realizar operaciones aritméticas básicas. Todos ellos esperan como</div>
   <div>argumento (opcional) un array de numeros con los que queremos operar y</div>
   <div>devuelven un valor resultado.</div>
   <br>     
   <div>Si no introducimos argumentos al invocar alguno de los métodos de</div>
   <div>cálculo aritmético, se realizará el cálculo entre dos numeros aleatorios.</div>
   <div class = class="snippet-clipboard-content position-relative"><pre><code>console.log(myObjetCalc.suma());</code></pre></div>
   <br>
   <div>Podemos invocar estos métodos instantiando o sin instanciar ningún</div>
   <div>objeto.</div>
   <div class = class="snippet-clipboard-content position-relative"><pre><code>console.log(new EasyCalc().resta([3,2]));</code></pre></div>
   <div class = class="snippet-clipboard-content position-relative"><pre><code>console.log(EasyCalc.resta([3, 2]));</code></pre></div>
   <br>
   <div>Con los métodos get y set se puede llamar o actualizar cualquier
      atributo.</div>
   <br>
   <div>Por último, un método para eliminar todos los valores almacenados</div>
   <div>que los inicializa a 0.</div>
   <div class = class="snippet-clipboard-content position-relative"><pre><code>myObjetCalc.reset();</code></pre></div> 
   <br>
   <h3><li><div>VirtualCalc class.</div></h3>
   <div>Para utilizarla, es necesario importarla primero:</div>
   <div class = class="snippet-clipboard-content position-relative"><pre><code>import { VirtualCalc } from './node_modules/myeasycalc/virtualCalc'</code></pre></div>
   <div>Esta clase tiene el método: pint() que requiere de un objeto tipo</div>
   <div>EasyCalc como argumento y nos muestra por pantalla los resultados con</div>
   <div>una estética que emula una calculadora.</div>
   <div class = class="snippet-clipboard-content position-relative"><pre><code>myVirtualCalc(myObjetCalc);</code></pre></div>
 </ol>
 <br>
 <br>
 <div>En el archivo 'test.ts/js' se pueden encontrar mas ejemplos de uso de ambas
  clases.</div>
</p>
</h5>
