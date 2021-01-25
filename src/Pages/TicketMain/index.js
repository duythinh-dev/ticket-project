import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import Atoms from "../../component/MUI";
import ItemTicket from "./ItemTicket";
import { CartContext } from "../../component/card-product";
import ListCartTickets from "./ListCartTickets";

function TicketMain() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Atoms.Box mt={2}>
      <Atoms.Container maxWidth="lg">
        <Atoms.Grid container>
          <Atoms.Grid item lg={6}>
            <Atoms.Breadcrumbs aria-label="breadcrumb">
              <Atoms.Link
                color="inherit"
                href="/"
                // onClick={handleClick}
              >
                Vé xe khách
              </Atoms.Link>
              <Atoms.Typography variant="h6" color="primary">
                xe đi Kon Tum từ Tp Hồ Chí Minh
              </Atoms.Typography>
            </Atoms.Breadcrumbs>
          </Atoms.Grid>
          <Atoms.Grid item lg={6}>
            <Atoms.Box
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
            >
              <Atoms.Typography>
                <b>Vé đã đặt </b>-
              </Atoms.Typography>

              <CartContext.Consumer>
                {({ cartLists }) => {
                  return (
                    <Atoms.IconButton
                      aria-label="cart"
                      onClick={handleClickOpen}
                    >
                      <Atoms.Badge
                        badgeContent={cartLists.length}
                        color="secondary"
                      >
                        <ShoppingCartIcon />
                      </Atoms.Badge>
                    </Atoms.IconButton>
                  );
                }}
              </CartContext.Consumer>
            </Atoms.Box>
          </Atoms.Grid>
          <Atoms.Grid item lg={12}>
            <ItemTicket />
          </Atoms.Grid>
        </Atoms.Grid>
        <Atoms.Dialog
          fullWidth
          maxWidth="lg"
          open={open}
          onClose={handleClose}
          aria-labelledby="max-width-dialog-title"
        >
          <Atoms.DialogTitle id="max-width-dialog-title">
            Vé xe của bạn
          </Atoms.DialogTitle>
          <Atoms.DialogContent>
            <CartContext.Consumer>
              {({ cartLists }) => <ListCartTickets cartLists={cartLists} />}
            </CartContext.Consumer>
          </Atoms.DialogContent>
          <Atoms.DialogActions>
            <Atoms.Button
              onClick={handleClose}
              color="primary"
              variant="contained"
            >
              Close
            </Atoms.Button>
          </Atoms.DialogActions>
        </Atoms.Dialog>
      </Atoms.Container>
    </Atoms.Box>
  );
}

export default TicketMain;
