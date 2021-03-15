const settings = {
  name: "fydbr",
  state: {
    frontity: {
      url: "https://fakeyourdeathbr.com",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
    },
    theme: {
      lang: "pt",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            { name: "Início", href: "/" },
            { name: "Manifesto", href: "/manifesto/" },
            { name: "Sobre nós", href: "/about/" },
            { name: "Equipe", href: "/equipe/" },
            { name: "Contato", href: "/contact/" },
            {
              name: "Look Alive Sunshine",
              href: "/category/editorial/",
            },
            ,
          ],
          featured: {
            showOnList: true,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://fakeyourdeathbr.com",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
