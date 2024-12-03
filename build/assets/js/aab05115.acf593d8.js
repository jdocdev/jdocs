"use strict";(self.webpackChunkjuandavid_dev=self.webpackChunkjuandavid_dev||[]).push([[1363],{6622:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var r=s(153),n=s(4848),i=s(8453);const o={slug:"aumentar-tamano-swap",title:"Aumenta el Tama\xf1o del Archivo de Swap en Linux",authors:["JuanDavid_Dev"],tags:["tutorial","linux"]},l=void 0,c={authorsImageUrls:[void 0]},d=[{value:"1. Desactivar el archivo de Swap existente",id:"1-desactivar-el-archivo-de-swap-existente",level:2},{value:"2. Redimensionar el archivo de Swap",id:"2-redimensionar-el-archivo-de-swap",level:2},{value:"3. Establecer los permisos correctos",id:"3-establecer-los-permisos-correctos",level:2},{value:"4. Configurar el archivo de Swap",id:"4-configurar-el-archivo-de-swap",level:2},{value:"5. Activar el nuevo archivo de Swap",id:"5-activar-el-nuevo-archivo-de-swap",level:2},{value:"6. Verificar el cambio",id:"6-verificar-el-cambio",level:2},{value:"Bonus: Cambiar la prioridad de uso del swap",id:"bonus-cambiar-la-prioridad-de-uso-del-swap",level:3}];function t(e){const a={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.hr,{}),"\n",(0,n.jsx)(a.p,{children:"\xbfTu sistema Linux est\xe1 usando demasiado swap y necesitas m\xe1s espacio? Aqu\xed te guiar\xe9 paso a paso sobre c\xf3mo aumentar el tama\xf1o del archivo de swap (/swap.img) para mejorar el rendimiento de tu sistema. \ud83d\udcbb \ud83d\ude80"}),"\n",(0,n.jsx)(a.hr,{}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Pasos para aumentar el tama\xf1o del archivo de Swap"})}),"\n",(0,n.jsx)(a.h2,{id:"1-desactivar-el-archivo-de-swap-existente",children:"1. Desactivar el archivo de Swap existente"}),"\n",(0,n.jsx)(a.p,{children:"Antes de hacer cambios en el archivo de swap, necesitas desactivarlo. Esto liberar\xe1 el espacio para hacer modificaciones. Ejecuta el siguiente comando en tu terminal:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"sudo swapoff /swap.img\n"})}),"\n",(0,n.jsx)(a.h2,{id:"2-redimensionar-el-archivo-de-swap",children:"2. Redimensionar el archivo de Swap"}),"\n",(0,n.jsx)(a.p,{children:"Ahora que has desactivado el archivo de swap, es momento de aumentar su tama\xf1o. Hay dos formas de hacerlo:"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Opci\xf3n 1: Usar fallocate (m\xe1s r\xe1pido)"})}),"\n",(0,n.jsx)(a.p,{children:"Si buscas rapidez, usa el siguiente comando para aumentar el archivo de swap a 8 GB:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"sudo fallocate -l 8G /swap.img\n"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Opci\xf3n 2: Usar dd (m\xe1s seguro, pero m\xe1s lento)"})}),"\n",(0,n.jsx)(a.p,{children:"Si prefieres un enfoque m\xe1s seguro (aunque algo m\xe1s lento), puedes usar el comando dd:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"sudo dd if=/dev/zero of=/swap.img bs=1G count=8\n"})}),"\n",(0,n.jsx)(a.h2,{id:"3-establecer-los-permisos-correctos",children:"3. Establecer los permisos correctos"}),"\n",(0,n.jsx)(a.p,{children:"Es fundamental que el archivo de swap solo sea accesible por el sistema. Aseg\xfarate de establecer los permisos adecuados con el siguiente comando:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"sudo chmod 600 /swap.img\n"})}),"\n",(0,n.jsx)(a.h2,{id:"4-configurar-el-archivo-de-swap",children:"4. Configurar el archivo de Swap"}),"\n",(0,n.jsx)(a.p,{children:"Ahora, marca el nuevo archivo como espacio de swap con el siguiente comando:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"sudo mkswap /swap.img\n"})}),"\n",(0,n.jsx)(a.h2,{id:"5-activar-el-nuevo-archivo-de-swap",children:"5. Activar el nuevo archivo de Swap"}),"\n",(0,n.jsx)(a.p,{children:"Para activar el nuevo archivo de swap con su tama\xf1o actualizado, ejecuta:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"sudo swapon /swap.img\n"})}),"\n",(0,n.jsx)(a.h2,{id:"6-verificar-el-cambio",children:"6. Verificar el cambio"}),"\n",(0,n.jsx)(a.p,{children:"Para confirmar que el nuevo tama\xf1o del swap ha sido aplicado correctamente, ejecuta el siguiente comando:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"free -h\n"})}),"\n",(0,n.jsx)(a.p,{children:"Deber\xedas ver algo como esto en la salida"}),"\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:(0,n.jsx)(a.strong,{children:"Type"})}),(0,n.jsx)(a.th,{children:(0,n.jsx)(a.strong,{children:"Total"})}),(0,n.jsx)(a.th,{children:(0,n.jsx)(a.strong,{children:"Used"})}),(0,n.jsx)(a.th,{children:(0,n.jsx)(a.strong,{children:"Free"})}),(0,n.jsx)(a.th,{children:(0,n.jsx)(a.strong,{children:"Shared"})}),(0,n.jsx)(a.th,{children:(0,n.jsx)(a.strong,{children:"Buff/Cache"})}),(0,n.jsx)(a.th,{children:(0,n.jsx)(a.strong,{children:"Available"})})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:(0,n.jsx)(a.strong,{children:"Mem"})}),(0,n.jsx)(a.td,{children:"7.7G"}),(0,n.jsx)(a.td,{children:"2.4G"}),(0,n.jsx)(a.td,{children:"4.3G"}),(0,n.jsx)(a.td,{children:"0.2G"}),(0,n.jsx)(a.td,{children:"1.0G"}),(0,n.jsx)(a.td,{children:"5.0G"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:(0,n.jsx)(a.strong,{children:"Swap"})}),(0,n.jsx)(a.td,{children:"8.0G"}),(0,n.jsx)(a.td,{children:"0.0G"}),(0,n.jsx)(a.td,{children:"8.0G"}),(0,n.jsx)(a.td,{children:"-"}),(0,n.jsx)(a.td,{children:"-"}),(0,n.jsx)(a.td,{children:"-"})]})]})]}),"\n",(0,n.jsx)(a.h3,{id:"bonus-cambiar-la-prioridad-de-uso-del-swap",children:"Bonus: Cambiar la prioridad de uso del swap"}),"\n",(0,n.jsx)(a.p,{children:"Este valor var\xeda entre 0 y 100. Un valor bajo significa que el sistema usar\xe1 menos el swap, mientras que un valor alto lo usar\xe1 m\xe1s."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Ver el valor actual de swappiness"})}),"\n",(0,n.jsx)(a.p,{children:"El valor de vm.swappiness controla cu\xe1ndo el sistema usar\xe1 el swap en lugar de la RAM. Puedes ver su valor actual con el siguiente comando:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"cat /proc/sys/vm/swappiness\n"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Cambiar vm.swappiness temporalmente"})}),"\n",(0,n.jsx)(a.p,{children:"Si quieres modificar este valor temporalmente (hasta el siguiente reinicio), ejecuta:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"sudo sysctl vm.swappiness=valor\n"})}),"\n",(0,n.jsx)(a.p,{children:"Por ejemplo:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"sudo sysctl vm.swappiness=80\n"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"\xbfPor qu\xe9 aumentar el tama\xf1o del Swap?"})}),"\n",(0,n.jsx)(a.p,{children:"Aumentar el tama\xf1o del archivo de swap es \xfatil si tu sistema tiene poca RAM o si ejecutas aplicaciones que consumen mucha memoria como por ejemplo virtualizaci\xf3n con de contenedores con Docker. Con m\xe1s swap, tu sistema tendr\xe1 espacio adicional para almacenar informaci\xf3n, lo que puede mejorar el rendimiento general, especialmente cuando hay mucha carga en la memoria."}),"\n",(0,n.jsx)(a.hr,{})]})}function u(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(t,{...e})}):t(e)}},8453:(e,a,s)=>{s.d(a,{R:()=>o,x:()=>l});var r=s(6540);const n={},i=r.createContext(n);function o(e){const a=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(i.Provider,{value:a},e.children)}},153:e=>{e.exports=JSON.parse('{"permalink":"/jdocs/blog/aumentar-tamano-swap","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-12-02/aumentar-tamano-swap.md","source":"@site/blog/2024-12-02/aumentar-tamano-swap.md","title":"Aumenta el Tama\xf1o del Archivo de Swap en Linux","description":"---","date":"2024-12-02T00:00:00.000Z","tags":[{"inline":false,"label":"Tutorial","permalink":"/jdocs/blog/tags/tutorial","description":"Esta etiqueta agrupa art\xedculos que son recursos tutoriales."},{"inline":false,"label":"Linux","permalink":"/jdocs/blog/tags/linux","description":"Esta etiqueta agrupa art\xedculos que son recursos o gu\xedas sobre linux."}],"readingTime":2.505,"hasTruncateMarker":true,"authors":[{"name":"JuanDavid_Dev","title":"Administrador","url":"https://www.youtube.com/@juandavid_dev","page":{"permalink":"/jdocs/blog/authors/juan-david-dev"},"socials":{"x":"https://x.com/JuanDavid_Dev","github":"https://github.com/jdocdev","youtube":"https://youtube.com/@juandavid_dev"},"description":"Soy desarrollador y creador de contenido enfocado en programaci\xf3n y tecnolog\xeda. Mi objetivo es ense\xf1ar y compartir conocimientos de manera sencilla y pr\xe1ctica.","imageURL":"https://github.com/jdocdev.png","key":"JuanDavid_Dev"}],"frontMatter":{"slug":"aumentar-tamano-swap","title":"Aumenta el Tama\xf1o del Archivo de Swap en Linux","authors":["JuanDavid_Dev"],"tags":["tutorial","linux"]},"unlisted":false,"nextItem":{"title":"Aprende Desarrollo Web con React Desde Cero","permalink":"/jdocs/blog/curso-react-desde-cero"}}')}}]);