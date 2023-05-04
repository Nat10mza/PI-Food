import "./App.css";
import { Route } from "react-router-dom";
import Detail from "./pages/detail";
import Form from "./pages/form";
import NavBar from "./components/NavBar";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/recipe/:id" component={Detail} />
      <Route path="/form" component={Form} />
    </div>
  );
}

export default App;
