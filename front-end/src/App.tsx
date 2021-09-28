import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Main } from "./components/common/Main";
import AuthProvider from "./context/AuthProvider";
import ComingSoon from "./pages/ComingSoon";
import Landing from "./pages/Landing";
import League from "./pages/League";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import LoggedOutRoute from "./routes/LoggedOutRouter";
import PrivateRoute from "./routes/PrivateRoute";

const App = (): JSX.Element => {
  return (
    <Router>
      <AuthProvider>
        <Main>
          <Switch>
            <LoggedOutRoute exact path="/" component={Landing} />
            <LoggedOutRoute exact path="/register" component={Register} />
            <LoggedOutRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/leagues" component={League} />
            <PrivateRoute exact path="/cups" component={ComingSoon} />
            <PrivateRoute exact path="/players" component={ComingSoon} />
            <PrivateRoute exact path="/teams" component={ComingSoon} />
            <Route component={NotFound} />
          </Switch>
        </Main>
      </AuthProvider>
    </Router>
  );
};

export default App;
