import { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router";
import LogIn from "./pages/login/login";
import MainView from "./pages/main-view/main-viev";
function App() {
  const history = useHistory();
  const uset = localStorage.getItem("my-token");
  // if (!uset) {
  //   history.push("/login");
  // } else {
  //   history.push("/product");
  // }

  return (
    <Switch>
      <Route exact path="/login" component={LogIn} />
      <Route path="/" component={MainView} />
    </Switch>
  );
}

export default App;
