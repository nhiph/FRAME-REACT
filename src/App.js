import "./App.css";
// Thu vien giup chuyen huong trang
import { Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
// Component
import Loading from "./components/loading/Loading";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import UserTemplate from "./templates/UserTemplate/UserTemplate";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register"

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      {/* Commom component */}
      <Loading />

      {/* Templates with pages */}
      <Switch>
        {/* hometemplate */}
        <HomeTemplate exact path="/" component={Home} />

        {/* usertemplate */}
        <UserTemplate exact path="/register" component={Register} />
        <UserTemplate exact path="/login" component={Login} />

      </Switch>
    </Router>
  );
}

export default App;
