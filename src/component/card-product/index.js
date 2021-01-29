/* eslint-disable no-lone-blocks */
import React, { Component } from "react";

export const CartContext = React.createContext();

export class CartProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartLists: [],
    };
  }

  //  { connt : số luong }

  updateCart = (product) => {
    const item = [...this.state.cartLists].find((x) => x.id === product.id);
    // kiem tra xem san pham da co trong cart chua
    if (item) {
      const b = [...this.state.cartLists].map((y) => {
        if (item.id === y.id) {
          // neu co roi (trùng ID) thì ghi đè biến count + 1 vào biến count của object
          return { ...y, count: y.count + 1 };
        }
        // neu khác ID thi k làm gì cả
        return { ...y };
      });
      this.setState({
        cartLists: [...b],
      });
      // sau đó gắn mảng vừa được lọc vào cho cartList
    } else {
      // neu san pham chua ton tai trong cart thì thêm object vào mảng cartLists và thêm cho object biến count: 1
      this.setState({
        cartLists: [...this.state.cartLists, { ...product, count: 1 }],
      });
    }
  };

  updateDeleteCart = (object) => {
    // Hàm xóa item trong cart
    // console.log(object);
    this.setState({
      cartLists: this.state.cartLists.filter((x) => x.id !== object.id),
    });
  };

  render() {
    const { cartLists } = this.state;
    // console.log("item trong cart", cartLists);
    return (
      <CartContext.Provider
        value={{
          cartLists,
          updateCart: this.updateCart,
          updateDeleteCart: this.updateDeleteCart,
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
