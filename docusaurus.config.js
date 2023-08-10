// @ts-check

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")
const math = require("remark-math")
const katex = require("rehype-katex")

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Jasen Qin",
  tagline: "\"And as I gazed upon the horizon, I saw the creator's will and its magnificence among the unenlightened hive\"",
  url: "https://n.project-spectre.info",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/Rei-Light.png",

  // If you aren't using GitHub pages, you don't need these
  organizationName: "hyperswine",
  projectName: "projects",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    mermaid: true,
  },
  themes: [
    "@docusaurus/theme-mermaid",
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
      }),
    ]
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Overview",
        items: [
          { to: '/blog', label: 'Posts', position: 'left' },
          {
            type: "docSidebar",
            position: "left",
            label: "Works",
            sidebarId: "main"
          },
          {
            type: 'docSidebar',
            sidebarId: 'research',
            label: 'Research',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'about',
            label: 'About',
            position: 'left',
          },
          {
            href: "https://github.com/hyperswine.github.io",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      mermaid: {
        theme: { light: "neutral", dark: "forest" },
        options: {
          maxTextSize: 50,
        },
      },
      // algolia: {
      //   // The application ID provided by Algolia
      //   appId: "YOUR_APP_ID",
      //   // Public API key: it is safe to commit it
      //   apiKey: "YOUR_SEARCH_API_KEY",
      //   indexName: "YOUR_INDEX_NAME",

      //   contextualSearch: true,
      //   searchParameters: {},
      //   // Optional: path for search page that enabled by default (`false` to disable it)
      //   searchPagePath: "search",
      // },
    }),

  // plugins: [
  //   [
  //     'content-docs',
  //     ({
  //       id: 'about',
  //       path: 'about',
  //       routeBasePath: 'about',
  //       sidebarPath: require.resolve('./sidebarsAbout.js'),
  //     })
  //   ]
  // ]
}

module.exports = config
