import { BrowserRouter as Router, Route } from "react-router-dom";
import { Main } from "./components/common/Main";
import Home from "./components/pages/Home";

const App = (): JSX.Element => {
  return (
    <Router>
      <Main>
        <Route exact path="/" component={Home} />
      </Main>
    </Router>
  );
};

export default App;
