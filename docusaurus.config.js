// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
    scripts: [
        {
            src: "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js",
            async: true,
            "data-name": "BMC-Widget",
            "data-cfasync": "false",
            "data-id": "juandavid",
            "data-description": "¡Apóyame invitándome a un café!",
            "data-message": "¡Apóyame invitándome a un café!",
            "data-color": "#FFBC39",
            "data-position": "right",
            "data-x_margin": "20",
            "data-y_margin": "20",
        },
    ],

    title: "¡En construcción!",
    tagline: "@JuanDavid_Dev",
    favicon: "img/jdocdev_logo.png",

    // Set the production url of your site here
    url: "https://your-docusaurus-site.example.com",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/jdocs/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "jdocdev", // Usually your GitHub org/user name.
    projectName: "jdocs", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "es",
        locales: ["es"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: "./sidebars.js",
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ["rss", "atom"],
                        xslt: true,
                    },
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                    // Useful options to enforce blogging best practices
                    onInlineTags: "warn",
                    onInlineAuthors: "warn",
                    onUntruncatedBlogPosts: "warn",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: "img/docusaurus-social-card.jpg",
            navbar: {
                title: "JuanDavid_Dev",
                logo: {
                    alt: "My Site Logo",
                    src: "img/jdocdev_logo.png",
                },
                items: [
                    {
                        type: "docSidebar",
                        sidebarId: "tutorialSidebar",
                        position: "left",
                        label: "Aprende a programar",
                    },
                    { to: "/blog", label: "Blog", position: "left" },
                    {
                        href: "https://github.com/jdocdev",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Documentación",
                        items: [
                            {
                                label: "Aprende a programar",
                                to: "/docs/introduccion",
                            },
                        ],
                    },
                    {
                        title: "Comunidad",
                        items: [
                            {
                                label: "YouTube",
                                href: "https://www.youtube.com/@juandavid_dev",
                            },
                            {
                                label: "X",
                                href: "https://x.com/JuanDavid_Dev",
                            },
                        ],
                    },
                    {
                        title: "Más",
                        items: [
                            {
                                label: "Blog",
                                to: "/blog",
                            },
                            {
                                label: "GitHub",
                                href: "https://github.com/jdocdev",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} JuanDavid_Dev.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
