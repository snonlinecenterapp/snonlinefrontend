import Dashboard from "../Layout/Dashboard/Dashboard";
import Home from "../Layout/Home/Home";
import Services from "../Layout/Services/Services";

export const routes = [
  {
    path: "/",
    element: <Dashboard />,
    route: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
    ],
  },
];
