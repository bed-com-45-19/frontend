import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Home/Home";

import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import SignUp from "./Components/SignUp/SignUp";
import LogIn from "./Components/LogIn/LogIn";

import BookingDetails from "./Components/BookingDetails/BookingDetails";
import "./App.css";


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navigation />
          <Home />
         
        </Route>

        <Route path="/about-us">
          <AboutUs />
        </Route>

        <Route path="/signup">
          <SignUp />
        </Route>

        <Route path="/contact-us">
          <ContactUs />
        </Route>

        <Route path="/login">
          <LogIn />
        </Route>

       
          <BookingDetails />
       
      </Switch>
    </Router>
  );
}

export default App;
