import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./pages/Home";
import WindServices from "./pages/WindServices";
import RetailServices from "./pages/RetailServices";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "wind-services", Component: WindServices },
      { path: "retail-services", Component: RetailServices },
      { path: "resources", Component: Resources },
      { path: "contact", Component: Contact },
    ],
  },
]);
