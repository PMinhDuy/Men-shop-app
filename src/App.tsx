import "./App.css";
import Users from "./page/user";
import Page from "./page";
import { useRoutes } from "react-router-dom";

function App() {
  const routes = [
    { path: '/', element: <Page /> },
    { path: '/users', element: <Users /> },
  ];
  const routeResult = useRoutes(routes);
  return routeResult;
}

export default App;
