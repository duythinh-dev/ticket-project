import React from "react";
import Header from "./component/Header";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn/index";
import TicketMain from "./Pages/TicketMain";
import { CartProvider } from "./component/card-product";
import history from "./Helper/History";
import AuthorRoute from "./component/AuthorRouter";
import Registration from "./Pages/Register";
import { configureFakeBackend } from "./Helper/fakeBackend.help";
import { Route, Router, Switch } from "react-router-dom";
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
