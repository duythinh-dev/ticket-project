import React from "react";
import { CartContext } from "../card-product";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import Atoms from "../MUI";

function NumberTicketSelect() {
  return (
    <>
      <CartContext.Consumer>
        {({ numberTicketVtp }) => (
          <Atoms.Badge badgeContent={numberTicketVtp} color="secondary">
            <ConfirmationNumberIcon />
          </Atoms.Badge>
        )}
      </CartContext.Consumer>
    </>
  );
}

export default NumberTicketSelect;
