import getAPIData from "./API";

const getRoutes = (menuData, lang) => {
  var mainMenu = [];

  const mainNavMenu = menuData.data["navigation"][0]["children"].map(
    (article) => {
      const link =
        lang === "en"
          ? article.link.substring(1)
          : article.link.replace(`/${lang}/`, "");
      return {
        params: {
          slug: [link],
          // .replace("/t3t-shiva", "").replace("/", "")
        },
        locale: lang,
      };
    }
  );

  var menuChildren = [];

  menuData.data["navigation"][0]["children"].map((menus) => {
    if (!menus.children || !menus.children.length) {
      return;
    }
    var spreadMenuChildren = menus.children.map((child) => {
      const subLink =
        lang === "en"
          ? child.link.substring(1)
          : child.link.replace(`/${lang}/`, "");
      return {
        params: {
          slug: subLink.split("/"),
          // .replace("typo3/t3shiva/backend/public/", ""),
        },
        locale: lang,
      };
    });
    menuChildren = [...menuChildren, ...spreadMenuChildren];
  });

  mainMenu = [...mainNavMenu, ...menuChildren];

  return mainMenu;
};

const getNewsRoutes = (newsData, lang) => {
  let allNews = [];

  var newsMenu =
    newsData.data["content"]["colPos0"][0]["content"]["data"]["list"];
  if (newsMenu) {
    var news = newsMenu.map((article) => {
      return {
        params: {
          slug: ["news-detail", article.pathSegment],
        },
        locale: lang,
      };
    });
    allNews = [...allNews, ...news];
  }

  return allNews;
};

export const Routes = async () => {
  const menuData = await getAPIData("?type=834");
  const deMenuData = await getAPIData("de?type=834");
  const newsData = await getAPIData("news");
  const deNewsData = await getAPIData("de/news");
  let allNews = [];

  let pages = [
    {
      params: { slug: ["search"] },
    },
  ];

  let getDERoutes = [];
  let getENRoutes = [];
  if (deMenuData && deMenuData.data) {
    getDERoutes = getRoutes(deMenuData, "de");
  }
  if (menuData && menuData.data) {
    getENRoutes = getRoutes(menuData, "en");
  }

  pages = [...pages, ...getDERoutes, ...getENRoutes];

  let getDENewsRoutes = [];
  let getENNewsRoutes = [];
  if (newsData && newsData.data) {
    getENNewsRoutes = getNewsRoutes(newsData, "en");
  }
  if (deNewsData && deNewsData.data) {
    getDENewsRoutes = getNewsRoutes(deNewsData, "de");
  }

  allNews = [...allNews, ...getDENewsRoutes, ...getENNewsRoutes];

  var paths = allNews ? pages.concat(allNews) : pages;

  return paths;
};

export default Routes;
