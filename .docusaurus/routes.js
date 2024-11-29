import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/jdocs/blog',
    component: ComponentCreator('/jdocs/blog', 'cff'),
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
    path: '/jdocs/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/jdocs/blog/authors/all-sebastien-lorber-articles', 'c2e'),
    exact: true
  },
  {
    path: '/jdocs/blog/authors/yangshun',
    component: ComponentCreator('/jdocs/blog/authors/yangshun', 'daf'),
    exact: true
  },
  {
    path: '/jdocs/blog/first-blog-post',
    component: ComponentCreator('/jdocs/blog/first-blog-post', 'a3f'),
    exact: true
  },
  {
    path: '/jdocs/blog/long-blog-post',
    component: ComponentCreator('/jdocs/blog/long-blog-post', '2f5'),
    exact: true
  },
  {
    path: '/jdocs/blog/mdx-blog-post',
    component: ComponentCreator('/jdocs/blog/mdx-blog-post', 'e7b'),
    exact: true
  },
  {
    path: '/jdocs/blog/tags',
    component: ComponentCreator('/jdocs/blog/tags', '638'),
    exact: true
  },
  {
    path: '/jdocs/blog/tags/docusaurus',
    component: ComponentCreator('/jdocs/blog/tags/docusaurus', '664'),
    exact: true
  },
  {
    path: '/jdocs/blog/tags/facebook',
    component: ComponentCreator('/jdocs/blog/tags/facebook', '00f'),
    exact: true
  },
  {
    path: '/jdocs/blog/tags/hello',
    component: ComponentCreator('/jdocs/blog/tags/hello', 'd29'),
    exact: true
  },
  {
    path: '/jdocs/blog/tags/hola',
    component: ComponentCreator('/jdocs/blog/tags/hola', 'e71'),
    exact: true
  },
  {
    path: '/jdocs/blog/welcome',
    component: ComponentCreator('/jdocs/blog/welcome', 'c8d'),
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
