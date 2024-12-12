import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/jdocs/blog',
    component: ComponentCreator('/jdocs/blog', '7aa'),
    exact: true
  },
  {
    path: '/jdocs/blog/aprende-mdx-blog-post',
    component: ComponentCreator('/jdocs/blog/aprende-mdx-blog-post', '23f'),
    exact: true
  },
  {
    path: '/jdocs/blog/archive',
    component: ComponentCreator('/jdocs/blog/archive', '1d3'),
    exact: true
  },
  {
    path: '/jdocs/blog/aumentar-tamano-swap',
    component: ComponentCreator('/jdocs/blog/aumentar-tamano-swap', '802'),
    exact: true
  },
  {
    path: '/jdocs/blog/authors',
    component: ComponentCreator('/jdocs/blog/authors', '5fc'),
    exact: true
  },
  {
    path: '/jdocs/blog/authors/juan-david-dev',
    component: ComponentCreator('/jdocs/blog/authors/juan-david-dev', '6a8'),
    exact: true
  },
  {
    path: '/jdocs/blog/curso-js-desde-cero',
    component: ComponentCreator('/jdocs/blog/curso-js-desde-cero', 'b06'),
    exact: true
  },
  {
    path: '/jdocs/blog/curso-manejo-dom',
    component: ComponentCreator('/jdocs/blog/curso-manejo-dom', 'c6b'),
    exact: true
  },
  {
    path: '/jdocs/blog/curso-react-desde-cero',
    component: ComponentCreator('/jdocs/blog/curso-react-desde-cero', '3d7'),
    exact: true
  },
  {
    path: '/jdocs/blog/hola-blog-post',
    component: ComponentCreator('/jdocs/blog/hola-blog-post', '315'),
    exact: true
  },
  {
    path: '/jdocs/blog/mini-curso-html-css-flexbox',
    component: ComponentCreator('/jdocs/blog/mini-curso-html-css-flexbox', 'e73'),
    exact: true
  },
  {
    path: '/jdocs/blog/tags',
    component: ComponentCreator('/jdocs/blog/tags', '638'),
    exact: true
  },
  {
    path: '/jdocs/blog/tags/blog',
    component: ComponentCreator('/jdocs/blog/tags/blog', '195'),
    exact: true
  },
  {
    path: '/jdocs/blog/tags/css',
    component: ComponentCreator('/jdocs/blog/tags/css', '573'),
    exact: true
  },
  {
    path: '/jdocs/blog/tags/html',
    component: ComponentCreator('/jdocs/blog/tags/html', '1ec'),
    exact: true
  },
  {
    path: '/jdocs/blog/tags/javascript',
    component: ComponentCreator('/jdocs/blog/tags/javascript', '0e8'),
    exact: true
  },
  {
    path: '/jdocs/blog/tags/linux',
    component: ComponentCreator('/jdocs/blog/tags/linux', '29b'),
    exact: true
  },
  {
    path: '/jdocs/blog/tags/mdx',
    component: ComponentCreator('/jdocs/blog/tags/mdx', '20f'),
    exact: true
  },
  {
    path: '/jdocs/blog/tags/react',
    component: ComponentCreator('/jdocs/blog/tags/react', 'f43'),
    exact: true
  },
  {
    path: '/jdocs/blog/tags/repost',
    component: ComponentCreator('/jdocs/blog/tags/repost', '57c'),
    exact: true
  },
  {
    path: '/jdocs/blog/tags/tutorial',
    component: ComponentCreator('/jdocs/blog/tags/tutorial', '0ce'),
    exact: true
  },
  {
    path: '/jdocs/blog/tags/youtube',
    component: ComponentCreator('/jdocs/blog/tags/youtube', '93c'),
    exact: true
  },
  {
    path: '/jdocs/blog/taller-html-css-js-piedra-papel-tijera',
    component: ComponentCreator('/jdocs/blog/taller-html-css-js-piedra-papel-tijera', '6fc'),
    exact: true
  },
  {
    path: '/jdocs/markdown-page',
    component: ComponentCreator('/jdocs/markdown-page', '8a4'),
    exact: true
  },
  {
    path: '/jdocs/docs',
    component: ComponentCreator('/jdocs/docs', '748'),
    routes: [
      {
        path: '/jdocs/docs',
        component: ComponentCreator('/jdocs/docs', 'bd6'),
        routes: [
          {
            path: '/jdocs/docs',
            component: ComponentCreator('/jdocs/docs', '042'),
            routes: [
              {
                path: '/jdocs/docs/aprendiento-larevel/POO/PHP-POO-Docker',
                component: ComponentCreator('/jdocs/docs/aprendiento-larevel/POO/PHP-POO-Docker', '979'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/jdocs/docs/aprendiento-larevel/POO/POO-abstraccion',
                component: ComponentCreator('/jdocs/docs/aprendiento-larevel/POO/POO-abstraccion', 'b23'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/jdocs/docs/aprendiento-larevel/POO/POO-clases',
                component: ComponentCreator('/jdocs/docs/aprendiento-larevel/POO/POO-clases', 'fff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/jdocs/docs/aprendiento-larevel/POO/POO-constructores',
                component: ComponentCreator('/jdocs/docs/aprendiento-larevel/POO/POO-constructores', '43e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/jdocs/docs/aprendiento-larevel/POO/POO-constructores-PHP8',
                component: ComponentCreator('/jdocs/docs/aprendiento-larevel/POO/POO-constructores-PHP8', 'd3b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/jdocs/docs/aprendiento-larevel/POO/POO-instancias-objetos',
                component: ComponentCreator('/jdocs/docs/aprendiento-larevel/POO/POO-instancias-objetos', '4e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/jdocs/docs/aprendiento-larevel/POO/POO-introduccion',
                component: ComponentCreator('/jdocs/docs/aprendiento-larevel/POO/POO-introduccion', '8d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/jdocs/docs/aprendiento-larevel/POO/POO-metodos-PHP',
                component: ComponentCreator('/jdocs/docs/aprendiento-larevel/POO/POO-metodos-PHP', '6dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/jdocs/docs/aprendiento-larevel/POO/POO-modificiadores-acceso',
                component: ComponentCreator('/jdocs/docs/aprendiento-larevel/POO/POO-modificiadores-acceso', 'f09'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/jdocs/docs/aprendiento-larevel/POO/POO-tipado-datos',
                component: ComponentCreator('/jdocs/docs/aprendiento-larevel/POO/POO-tipado-datos', '0e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/jdocs/docs/aprendiento-larevel/puesta-en-marcha',
                component: ComponentCreator('/jdocs/docs/aprendiento-larevel/puesta-en-marcha', 'd92'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/jdocs/docs/category/fundamentos-de-programación',
                component: ComponentCreator('/jdocs/docs/category/fundamentos-de-programación', 'fa8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/jdocs/docs/category/introducción',
                component: ComponentCreator('/jdocs/docs/category/introducción', '12a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/jdocs/docs/category/laravel-11',
                component: ComponentCreator('/jdocs/docs/category/laravel-11', 'b01'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/jdocs/docs/category/poo-php',
                component: ComponentCreator('/jdocs/docs/category/poo-php', 'f3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/jdocs/docs/fundamentos-de-programacion/introduccion/',
                component: ComponentCreator('/jdocs/docs/fundamentos-de-programacion/introduccion/', '229'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/jdocs/docs/fundamentos-de-programacion/introduccion/programas-algoritmos',
                component: ComponentCreator('/jdocs/docs/fundamentos-de-programacion/introduccion/programas-algoritmos', '00e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/jdocs/docs/introduccion',
                component: ComponentCreator('/jdocs/docs/introduccion', 'f59'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/jdocs/',
    component: ComponentCreator('/jdocs/', '123'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
