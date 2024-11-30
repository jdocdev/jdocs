import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/jdocs/blog',
    component: ComponentCreator('/jdocs/blog', '6ec'),
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
    path: '/jdocs/blog/authors',
    component: ComponentCreator('/jdocs/blog/authors', '5fc'),
    exact: true
  },
  {
    path: '/jdocs/blog/authors/juan-david-dev',
    component: ComponentCreator('/jdocs/blog/authors/juan-david-dev', '41e'),
    exact: true
  },
  {
    path: '/jdocs/blog/bienvenidos',
    component: ComponentCreator('/jdocs/blog/bienvenidos', '1fd'),
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
    component: ComponentCreator('/jdocs/blog/tags/blog', 'eaf'),
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
    component: ComponentCreator('/jdocs/blog/tags/javascript', 'fcf'),
    exact: true
  },
  {
    path: '/jdocs/blog/tags/mdx',
    component: ComponentCreator('/jdocs/blog/tags/mdx', '20f'),
    exact: true
  },
  {
    path: '/jdocs/blog/tags/repost',
    component: ComponentCreator('/jdocs/blog/tags/repost', 'ca2'),
    exact: true
  },
  {
    path: '/jdocs/blog/tags/tutorial',
    component: ComponentCreator('/jdocs/blog/tags/tutorial', '4e6'),
    exact: true
  },
  {
    path: '/jdocs/blog/tags/youtube',
    component: ComponentCreator('/jdocs/blog/tags/youtube', 'ed8'),
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
    component: ComponentCreator('/jdocs/docs', 'a43'),
    routes: [
      {
        path: '/jdocs/docs',
        component: ComponentCreator('/jdocs/docs', '5a0'),
        routes: [
          {
            path: '/jdocs/docs',
            component: ComponentCreator('/jdocs/docs', 'e9a'),
            routes: [
              {
                path: '/jdocs/docs/aprendiento-larevel/POO/PHP-POO-Docker',
                component: ComponentCreator('/jdocs/docs/aprendiento-larevel/POO/PHP-POO-Docker', '883'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/jdocs/docs/aprendiento-larevel/POO/POO-introduccion',
                component: ComponentCreator('/jdocs/docs/aprendiento-larevel/POO/POO-introduccion', '9c4'),
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
                path: '/jdocs/docs/category/poo',
                component: ComponentCreator('/jdocs/docs/category/poo', 'f6e'),
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
