/* eslint-disable no-lone-blocks */
import React, { Component } from "react";

export const CartContext = React.createContext();

export class CartProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartLists: [],
      numberTicketVtp: 0,
    };
  }

  updateCart = (product) => {
    // console.log(product);
    console.log(this.state.cartLists.includes(product));
    if (this.state.cartLists.includes(product)) {
      this.setState({
        numberTicketVtp: this.state.numberTicketVtp + 1,
      });
    } else {
      this.setState({
        cartLists: this.state.cartLists.concat(product),
        numberTicketVtp: 1,
      });
    }
  };

  updateDeleteCart = (object) => {
    console.log(object);
    this.setState({
      cartLists: this.state.cartLists.filter((x) => x.id !== object.id),
    });
  };

  render() {
    const { cartLists } = this.state;
    const { numberTicketVtp } = this.state;
    console.log(cartLists);
    return (
      <CartContext.Provider
        value={{
          cartLists,
          numberTicketVtp,
          updateCart: this.updateCart,
          updateDeleteCart: this.updateDeleteCart,
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
