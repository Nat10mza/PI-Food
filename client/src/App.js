import "./App.css";
import { Route } from "react-router-dom";
import Detail from "./pages/detail";
import Form from "./pages/form";
import NavBar from "./components/NavBar";
import Home from "./pages/home";
import About from "./pages/about";
import Landing from "./pages/landing";
import axios from "axios";
import Footer from "./components/Footer";
// axios.defaults.baseURL = "https://pi-food-production-44e5.up.railway.app/";
axios.defaults.baseURL = "http://localhost:3001/";

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
      <Footer />
    </div>
  );
}

export default App;
