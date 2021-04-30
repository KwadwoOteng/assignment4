import "./App.css";
import { NavLink } from "react-router-dom";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import PortfolioPage from "./PortfolioPage";
import ContactPage from "./ContactPage"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  StaticRouter,
  Link,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <header>
        <div class="headerTitle">
          <h1>OTENG'S VENTURES</h1>
        </div>

        <nav class="navBar">
          <ul class="navList">
            <NavLink to="/HomePage">
              <li class="listItem">HomePage</li>
            </NavLink>
            <NavLink to="/PortfolioPage">
              <li class="listItem">Portfolio</li>
            </NavLink>
            <Link to="/AboutPage">
              <li class="listItem">About us</li>
            </Link>
            <Link to="/ContactPage">
              <li class="listItem">Contact us</li>
            </Link>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/HomePage" component={HomePage} />
        <Route path="/PortfolioPage" component={PortfolioPage} />
        <Route path="/AboutPage" component={AboutPage} />
        <Route path="/ContactPage" component={ContactPage} />
      </Switch>
    </Router>
  );
}

export default App;
