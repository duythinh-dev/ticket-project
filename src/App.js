import React from "react";
import Header from "./component/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Atoms from "./component/MUI/index";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn/index";
import TicketMain from "./Pages/TicketMain";
import { CartProvider } from "./component/card-product";
import history from "./Helper/History";
import AuthorRoute from "./component/AuthorRouter";
import Registration from "./Pages/Register";
import { configureFakeBackend } from "./Helper/fakeBackend.help";
configureFakeBackend();
function App() {
  return (
    <CartProvider>
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/SignIn" component={SignIn} />
          <Route path="/registration" component={Registration} />
          <AuthorRoute exact path="/" component={Home} />
          <AuthorRoute exact path="/Ticket" component={TicketMain} />
        </Switch>
      </Router>
    </CartProvider>
  );
}

export default App;
