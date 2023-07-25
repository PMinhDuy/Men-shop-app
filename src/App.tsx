import "./App.css";
import Users from "./page/user";
import Page from "./page";
import { useRoutes } from "react-router-dom";
import TestRedux from "./page/testRedux";
import { PATH_URL } from "./shared/ultils/constant";
import SignIn from "./page/signIn";

function App() {
  const routes = [
    { path: "/", element: <Page /> },
    { path: PATH_URL.user, element: <Users /> },
    { path: PATH_URL.signIn, element: <SignIn /> },
    { path: "/testRedux", element: <TestRedux /> },
  ];
  const routeResult = useRoutes(routes);
  return routeResult;
}

export default App;
