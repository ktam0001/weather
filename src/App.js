import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Weather from './components/Weather';
import Days from "./components/days";

const Routing = ()=> {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={Weather} />
        <Route path="/days" component={Days} />
        
      </Switch>
    </Router>
  )
}
function App() {
  return (
    <Routing/>
  );
}

export default App;
//<Route path = "/hours" component = {Hours} />