import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";

const blogListHandler = {
  pattern: "/",
  func: async ({ route, params, state, libraries }) => {
    const per_page = 100;
    const { api, populate, getTotalPages } = libraries.source;
    const response = await api.get({
      endpoint: "posts",
      params: {
        per_page,
      },
    });
    const firstItems = await populate({
      response,
      state,
    });
    // const pages = getTotalPages(response);
    // const requests = [];

    // for (let page = 1; page <= pages; page++) {
    //   requests.push(
    //     api.get({
    //       endpoint: "posts",
    //       params: {
    //         per_page,
    //         page,
    //       },
    //     })
    //   );
    // }
    // const responses = await Promise.all(requests);

    // const newItems = await Promise.all(
    //   responses.map((response) => populate({ state, response }))
    // );
    // const items = firstItems.concat(newItems);

    // // 4. add data to source
    // const currentPageData = state.source.data["/"];
    // const newPageData = {
    //   isBlogList: true,
    //   items,
    // };

    // Object.assign(currentPageData, newPageData);
  },
};

const marsTheme = {
  name: "@frontity/mars-theme",
  roots: {
    /**
     * In Frontity, any package can add React components to the site.
     * We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme,
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    theme: {
      autoPrefetch: "in-view",
      menu: [],
      isMobileMenuOpen: false,
      featured: {
        showOnList: true,
        showOnPost: false,
      },
    },
  },

  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      // init: ({ libraries }) => {
      //   libraries.source.handlers.push(blogListHandler);
      // },
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
    },
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * and internal link inside the content HTML.
       * You can add your own processors too.
       */
      processors: [image, iframe, link],
    },
  },
};

export default marsTheme;
