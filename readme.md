<h1>INSTALATION
<br>
<h5>
 <p>
 <ol>
  <li>Make a new project directory:
   <div class = class="snippet-clipboard-content position-relative"><pre><code>$ mkdir easyCalc</code></pre></div>
  <li>Check login in npmjs.com:
   <div class = class="snippet-clipboard-content position-relative"><pre><code>$ npm login</code></pre></div>
  <li>Iniciate a new npm project:
   <div class = class="snippet-clipboard-content position-relative"><pre><code>$ cd easyCalc</code></pre></div>
   <div class = class="snippet-clipboard-content position-relative"><pre><code>$ npm init -f</code></pre></div>
  <li>Lastly, install 'myeasycalc' package:
   <div class = class="snippet-clipboard-content position-relative"><pre><code>$ npm install myeasycalc</code></pre></div>
 </ol>
 </p>
 <p><div>After a clean instalation, these are the files should came up:</div></p>
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
<h1>HOW TO USE
<br>
<h5>
 <p><h3><div>The package has two classes:</div></h3>
 <ol>
  <h3><li><div>EasyCalc class.</div></h3>
   <div>First, import the class in order to use it:</div>
   <div class = class="snippet-clipboard-content position-relative"><pre><code>import { EasyCalc } from './node_modules/myeasycalc/easyCalc'</code></pre></div>
   <div>The class contains four methods (sum, rest, multiplication and division),</div>
   <div>wich are ready to apply basic aritmetic operations. All of them are listen</div>
   <div>for an (optional) argument, in form of array of numbers, to operate with and</div>
   <div>as return, a calculated number is obtained.</div>
   <br>     
   <div>If no argument is passed at the invocation moment, these methods</div>
   <div> will be delivering a result anyway operating from two random numbers.</div>
   <div class = class="snippet-clipboard-content position-relative"><pre><code>console.log(myObjetCalc.suma());</code></pre></div>
   <br>
   <div>It is posible invoque these methods with or without an instance</div>
   <div>from the class.</div>
   <div class = class="snippet-clipboard-content position-relative"><pre><code>console.log(new EasyCalc().resta([3,2]));</code></pre></div>
   <div class = class="snippet-clipboard-content position-relative"><pre><code>console.log(EasyCalc.resta([3, 2]));</code></pre></div>
   <br>
   <div>There are  Get and Set methods to call or update every attribute</div>
   <div>into the class.</div>
   <br>
   <div>The last method is used to erease all value in every attribute</div>
   <div>and initialice them with value 0.</div>
   <div class = class="snippet-clipboard-content position-relative"><pre><code>myObjetCalc.reset();</code></pre></div> 
   <br>
   <h3><li><div>VirtualCalc class.</div></h3>
   <div>First, import the class in order to use it:</div>
   <div class = class="snippet-clipboard-content position-relative"><pre><code>import { VirtualCalc } from './node_modules/myeasycalc/virtualCalc'</code></pre></div>
   <div>This class has only one method: pint() An argument EasyCalc objet</div>
   <div>must be provide and as return, the class deliver every calculation</div>
   <div>results in a calculator simulation skin.</div>
   <div class = class="snippet-clipboard-content position-relative"><pre><code>myVirtualCalc(myObjetCalc);</code></pre></div>
 </ol>
 <br>
 <br>
 <div>The file 'test.ts' includes a full display of examples using</div>
 <div>both classes and all their methods and attributes.</div>
</p>
</h5>
