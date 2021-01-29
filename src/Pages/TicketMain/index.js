import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import Atoms from "../../component/MUI";
import ListItemTicket from "./ListItemTicket";
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
    <>
      <CartContext.Consumer>
        {({ cartLists }) => (
          <Atoms.Box mt={2}>
            <Atoms.Container maxWidth="lg">
              <Atoms.Grid container>
                <Atoms.Grid item lg={6} md={6} sm={8} xs={12}>
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
                <Atoms.Grid item lg={6} md={6} sm={4} xs={12}>
                  <Atoms.Box
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-end"
                  >
                    <Atoms.Typography>
                      <b>Vé đã đặt </b>-
                    </Atoms.Typography>
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
                  </Atoms.Box>
                </Atoms.Grid>
                <Atoms.Grid item xs={12}>
                  <ListItemTicket />
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
                  <ListCartTickets cartLists={cartLists} />
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
        )}
      </CartContext.Consumer>
    </>
  );
}

export default TicketMain;
