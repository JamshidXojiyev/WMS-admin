import { Route, Switch, useHistory } from "react-router";
import Employee from "./pages/employee/employee";
import LogIn from "./pages/login/login";
import Product from "./pages/product/product";

function App() {
  const history = useHistory();
  const uset = localStorage.getItem("my-token");
  if (!uset) {
    history.push("/login");
  } else {
    history.push("/product");
  }
  return (
    <Switch>
      <Route exact path="/login" component={LogIn} />
      <Route path="/product" component={Product} />
      <Route exact path="/employee" component={Employee} />
    </Switch>
  );
}

export default App;
