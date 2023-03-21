import LandingPage from "../pages";
import ProductPage from "../pages/product";

const routes = [
  {
    key: "index",
    path: `/`,
    title: "Fashiony",
    navbar: false,
    isAuthenticated: false,
    hasSubmenu: false,
    roles: "user",
    component: LandingPage,
  },
  {
    key: "index",
    path: `/product/:sku`,
    title: "Product",
    navbar: false,
    isAuthenticated: false,
    hasSubmenu: false,
    roles: "user",
    component: ProductPage,
  },
];
const navTree = [
  ...routes.filter((route) => {
    return route.navbar;
  }),
];

export { routes, navTree };
