import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { routes } from "./routes";

const subroute = (route) => {
    // console.log(route);
  if (!routes?.length) {
    return null;
  }
  return getRoutes(route);
};

const getRoutes = (routes) => {
  return routes?.map((item, index) => {
    return (
      <Route key={index} {...item}>
        {subroute(item?.route)}
      </Route>
    );
  });
};

export default function SnRoutes(props) {
  return (
    <Router>
      <Routes>{getRoutes(routes)}</Routes>
    </Router>
  );
}
