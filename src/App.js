import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import ContactUs from "./pages/ContactUs"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/fictionhub-reactjs/" component={Home} />
          <Route path="/fictionhub-reactjs/contactus" component={ContactUs} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

