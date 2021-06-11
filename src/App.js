import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import ContactUs from "./pages/ContactUs"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from './pages/Register';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/fictionhub-reactjs/" component={Home} />
          <Route path="/fictionhub-reactjs/contactus" component={ContactUs} />
          <Route path="/fictionhub-reactjs/register" component={ Register } />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

