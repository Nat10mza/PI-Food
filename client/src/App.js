import "./App.css";
import { Route } from "react-router-dom";
import Detail from "./pages/detail";
import Form from "./pages/form";
import NavBar from "./components/NavBar";
import Home from "./pages/home";
import About from "./pages/about";
import Landing from "./pages/landing";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/home" component={Home} />
      <Route path="/recipe/:id" component={Detail} />
      <Route path="/form" component={Form} />
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;
