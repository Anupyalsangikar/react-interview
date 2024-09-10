/**
 * Anup Yalsangikar
 *  
 */ 
import "./App.css";
import Home from "./pages/Home";
import Menu from "./component/Menu";
import PeoplePage from "./pages/PeoplePage";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import PlanetsPage from "./pages/PlanetsPage";
import StarshipsPage from "./pages/StarshipsPage";
import FilmsPage from "./pages/FilmsPage";
import SpeciesPage from "./pages/SpeciesPage";
import VehiclesPage from "./pages/VehiclesPage";

function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/people" component={PeoplePage} />
        <Route path="/planets" component={PlanetsPage} />
        <Route path="/starships" component={StarshipsPage} />
        <Route path="/films" component={FilmsPage} />
        <Route path="/species" component={SpeciesPage} />
        <Route path="/vehicles" component={VehiclesPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
