import React from "react";
import Header from "./component/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Atoms from "./component/MUI/index";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn/index";
import TicketMain from "./Pages/TicketMain";
import { CartProvider } from "./component/card-product";
function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Atoms.Grid
          style={{
            marginTop: "70px",
          }}
        >
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/SignIn">
              <SignIn />
            </Route>
            <Route path="/Ticket">
              <TicketMain />
            </Route>
          </Switch>
        </Atoms.Grid>
      </Router>
    </CartProvider>
  );
}

export default App;
