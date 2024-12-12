"use strict";(self.webpackChunkjuandavid_dev=self.webpackChunkjuandavid_dev||[]).push([[7895],{795:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>i});const a=JSON.parse('{"id":"aprendiento-larevel/POO/POO-metodos-PHP","title":"M\xe9todos en PHP","description":"Los m\xe9todos son funciones que pertenecen a una clase. Cuando una funci\xf3n se declara dentro de una clase, autom\xe1ticamente pasa a ser conocida como un m\xe9todo. Los m\xe9todos son fundamentales para la Programaci\xf3n Orientada a Objetos (POO), ya que permiten encapsular la l\xf3gica dentro de las clases y operar sobre los atributos de la misma. Este concepto est\xe1 estrechamente relacionado con el principio de abstracci\xf3n.","source":"@site/docs/03-aprendiento-larevel/02-POO/09-POO-metodos-PHP.md","sourceDirName":"03-aprendiento-larevel/02-POO","slug":"/aprendiento-larevel/POO/POO-metodos-PHP","permalink":"/jdocs/docs/aprendiento-larevel/POO/POO-metodos-PHP","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-aprendiento-larevel/02-POO/09-POO-metodos-PHP.md","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"sidebar_position":9},"sidebar":"tutorialSidebar","previous":{"title":"Constructor Property Promotion en PHP (PHP 8.0+)","permalink":"/jdocs/docs/aprendiento-larevel/POO/POO-constructores-PHP8"},"next":{"title":"Modificadores de Acceso en PHP","permalink":"/jdocs/docs/aprendiento-larevel/POO/POO-modificiadores-acceso"}}');var s=o(4848),d=o(8453);const c={sidebar_position:9},r="M\xe9todos en PHP",t={},i=[{value:"1. \xbfQu\xe9 es un M\xe9todo?",id:"1-qu\xe9-es-un-m\xe9todo",level:2},{value:"2. Forma de Invocar M\xe9todos",id:"2-forma-de-invocar-m\xe9todos",level:2},{value:"2.1 Desde Dentro de la Clase",id:"21-desde-dentro-de-la-clase",level:3},{value:"2.2 Desde una Instancia de la Clase",id:"22-desde-una-instancia-de-la-clase",level:3},{value:"3. Modificadores de Acceso en M\xe9todos",id:"3-modificadores-de-acceso-en-m\xe9todos",level:2},{value:"4. M\xe9todos Est\xe1ticos",id:"4-m\xe9todos-est\xe1ticos",level:2},{value:"5. Relaci\xf3n con la Abstracci\xf3n",id:"5-relaci\xf3n-con-la-abstracci\xf3n",level:2}];function l(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"m\xe9todos-en-php",children:"M\xe9todos en PHP"})}),"\n",(0,s.jsx)(n.p,{children:"Los m\xe9todos son funciones que pertenecen a una clase. Cuando una funci\xf3n se declara dentro de una clase, autom\xe1ticamente pasa a ser conocida como un m\xe9todo. Los m\xe9todos son fundamentales para la Programaci\xf3n Orientada a Objetos (POO), ya que permiten encapsular la l\xf3gica dentro de las clases y operar sobre los atributos de la misma. Este concepto est\xe1 estrechamente relacionado con el principio de abstracci\xf3n."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"1-qu\xe9-es-un-m\xe9todo",children:"1. \xbfQu\xe9 es un M\xe9todo?"}),"\n",(0,s.jsx)(n.p,{children:"Un m\xe9todo es una funci\xf3n que se define dentro de una clase. Se utiliza para realizar operaciones espec\xedficas relacionadas con los datos y la l\xf3gica de la clase. Los m\xe9todos pueden ser llamados desde:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Dentro de la misma clase."}),"\n",(0,s.jsx)(n.li,{children:"Desde una instancia de la clase."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Ejemplo B\xe1sico:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"<?php\nclass Calculadora {\n    // M\xe9todo que suma dos n\xfameros\n    public function sumar($a, $b) {\n        return $a + $b;\n    }\n}\n\n// Crear una instancia de la clase\n$calculadora = new Calculadora();\n\n// Llamar al m\xe9todo sumar desde la instancia\necho $calculadora->sumar(5, 3); // 8\n?>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"2-forma-de-invocar-m\xe9todos",children:"2. Forma de Invocar M\xe9todos"}),"\n",(0,s.jsx)(n.h3,{id:"21-desde-dentro-de-la-clase",children:"2.1 Desde Dentro de la Clase"}),"\n",(0,s.jsx)(n.p,{children:"Un m\xe9todo puede ser invocado desde otro m\xe9todo dentro de la misma clase utilizando la palabra clave $this."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:'<?php\nclass Saludo {\n    private $nombre;\n\n    public function __construct($nombre) {\n        $this->nombre = $nombre;\n    }\n\n    public function saludar() {\n        return "Hola, " . $this->nombre;\n    }\n\n    public function despedirse() {\n        return $this->saludar() . ". \xa1Adi\xf3s!";\n    }\n}\n\n$persona = new Saludo("Mar\xeda");\necho $persona->despedirse(); // "Hola, Mar\xeda. \xa1Adi\xf3s!"\n?>\n'})}),"\n",(0,s.jsx)(n.p,{children:"En este ejemplo, el m\xe9todo despedirse() llama al m\xe9todo saludar() desde dentro de la clase utilizando $this."}),"\n",(0,s.jsx)(n.h3,{id:"22-desde-una-instancia-de-la-clase",children:"2.2 Desde una Instancia de la Clase"}),"\n",(0,s.jsx)(n.p,{children:"Cuando un objeto es creado a partir de una clase, puedes invocar m\xe9todos p\xfablicos usando la sintaxis:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"$instancia->nombreDelMetodo();\n"})}),"\n",(0,s.jsx)(n.h2,{id:"3-modificadores-de-acceso-en-m\xe9todos",children:"3. Modificadores de Acceso en M\xe9todos"}),"\n",(0,s.jsx)(n.p,{children:"Los m\xe9todos pueden tener diferentes niveles de acceso, definidos por los modificadores public, private y protected."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"public"}),": El m\xe9todo puede ser accedido desde cualquier parte del c\xf3digo."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"private"}),": El m\xe9todo solo puede ser accedido desde dentro de la misma clase."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"protected"}),": El m\xe9todo puede ser accedido desde la clase y sus clases derivadas (herencia)."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Ejemplo con Diferentes Modificadores de Acceso:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:'<?php\nclass Ejemplo {\n    public function metodoPublico() {\n        return "M\xe9todo p\xfablico";\n    }\n\n    private function metodoPrivado() {\n        return "M\xe9todo privado";\n    }\n\n    protected function metodoProtegido() {\n        return "M\xe9todo protegido";\n    }\n\n    public function probarMetodos() {\n        // Acceso permitido dentro de la clase\n        echo $this->metodoPublico();\n        echo $this->metodoPrivado();\n        echo $this->metodoProtegido();\n    }\n}\n\n$ejemplo = new Ejemplo();\necho $ejemplo->metodoPublico(); // "M\xe9todo p\xfablico"\n// echo $ejemplo->metodoPrivado(); // Error\n// echo $ejemplo->metodoProtegido(); // Error\n'})}),"\n",(0,s.jsx)(n.h2,{id:"4-m\xe9todos-est\xe1ticos",children:"4. M\xe9todos Est\xe1ticos"}),"\n",(0,s.jsx)(n.p,{children:"Los m\xe9todos est\xe1ticos no requieren una instancia de la clase para ser llamados. En su lugar, se acceden directamente desde la clase utilizando el operador de resoluci\xf3n de \xe1mbito (::)."}),"\n",(0,s.jsx)(n.p,{children:"Ejemplo de M\xe9todo Est\xe1tico:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"<?php\nclass Matematica {\n    public static function sumar($a, $b) {\n        return $a + $b;\n    }\n}\n\necho Matematica::sumar(10, 20); // 30\n?>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"5-relaci\xf3n-con-la-abstracci\xf3n",children:"5. Relaci\xf3n con la Abstracci\xf3n"}),"\n",(0,s.jsx)(n.p,{children:"La abstracci\xf3n en POO consiste en ocultar los detalles complejos de implementaci\xf3n y mostrar solo las funcionalidades esenciales de un objeto. Los m\xe9todos son una parte crucial de este principio, ya que permiten a los objetos interactuar sin exponer directamente sus atributos."}),"\n",(0,s.jsx)(n.p,{children:"Ejemplo de Abstracci\xf3n con M\xe9todos:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:'<?php\nclass Coche {\n    private $encendido = false;\n\n    public function arrancar() {\n        $this->encendido = true;\n        return "El coche ha arrancado.";\n    }\n\n    public function estado() {\n        return $this->encendido ? "Encendido" : "Apagado";\n    }\n}\n\n$coche = new Coche();\necho $coche->estado();     // "Apagado"\necho $coche->arrancar();   // "El coche ha arrancado."\necho $coche->estado();     // "Encendido"\n?>\n'})}),"\n",(0,s.jsx)(n.p,{children:"En este ejemplo, los m\xe9todos arrancar() y estado() abstraen la l\xf3gica de c\xf3mo se gestiona el estado del coche internamente."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Documentado por:"})," ",(0,s.jsx)(n.a,{href:"https://www.youtube.com/@juandavid_dev",children:"JuanDavid_Dev"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Rol:"})," Administrador",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Fecha:"})," 04/12/2024",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"\xdaltima actualizaci\xf3n:"})," 04/12/2024"]}),"\n",(0,s.jsx)(n.hr,{})]})}function u(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>r});var a=o(6540);const s={},d=a.createContext(s);function c(e){const n=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);