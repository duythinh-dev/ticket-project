import React from "react";
import Atoms from "../MUI/index";
import avar from "../../img/avar.svg";
import PhoneCallbackIcon from "@material-ui/icons/PhoneCallback";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core";
// import { useSelector } from "react-redux";

const MenuItems = (props) => {
  const { to, ...other } = props;
  return <Atoms.MenuItem component={Link} to={to} {...other}></Atoms.MenuItem>;
};
const HeaderStyle = withStyles((theme) => ({
  root: {
    width: "100%",
    fontSize: "1.25rem",
    backgroundColor: theme.palette.grey[50],
    top: 0,
    // position: "fixed",
    zIndex: 11,
  },
}))(Atoms.Grid);
const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
  arrow: {
    color: theme.palette.common.white,
  },
}))(Atoms.Tooltip);

function Header() {
  const loggingIn = localStorage.getItem("state");
  // console.log(loggingIn === "true");

  return (
    <>
      <HeaderStyle container alignItems="center" id="navbar">
        <Atoms.Grid item lg={3} md={3} sm={5} xs={12}>
          <Atoms.Box display="flex" justifyContent="center">
            <MenuItems to="/">
              <img src={avar} alt="ssd" />
            </MenuItems>
          </Atoms.Box>
        </Atoms.Grid>
        <Atoms.Grid item lg={9} md={9} sm={7} xs={12}>
          <Atoms.Box display="flex" justifyContent="flex-end">
            <MenuItems to="/">Home</MenuItems>
            <MenuItems component={Link} to="/Ticket">
              <p>Tra cứu vé</p>
            </MenuItems>
            <Atoms.Box
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <LightTooltip
                placement="bottom"
                arrow
                interactive
                disableFocusListener
                disableTouchListener
                title={
                  <Atoms.Box p={2}>
                    <Atoms.Box dislay="flex" alignItems="center">
                      <Atoms.Typography color="primary">
                        <b>1900 888843 </b>
                      </Atoms.Typography>
                      <Atoms.Typography color="primary">
                        - Để được hướng dẫn cách đặt vé online
                      </Atoms.Typography>
                    </Atoms.Box>
                    <Atoms.Box dislay="flex" alignItems="center">
                      <Atoms.Typography color="primary">
                        <b>1900 888843 </b>
                      </Atoms.Typography>
                      <Atoms.Typography color="primary">
                        - Để đặt vé qua điện thoại
                      </Atoms.Typography>
                    </Atoms.Box>
                    <Atoms.Box dislay="flex" alignItems="center">
                      <Atoms.Typography color="primary">
                        <b>1900 888843 </b>
                      </Atoms.Typography>
                      <Atoms.Typography color="primary">
                        - Để phản hồi về dịch vụ và xử lý sự cố
                      </Atoms.Typography>
                    </Atoms.Box>
                    <Atoms.Typography color="textPrimary">
                      Từ 7h - 22h kể cả Thứ 7, Chủ nhật
                    </Atoms.Typography>
                  </Atoms.Box>
                }
              >
                <Atoms.Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<PhoneCallbackIcon />}
                >
                  Hotline
                </Atoms.Button>
              </LightTooltip>
              &nbsp;
              {loggingIn === "true" ? (
                <Atoms.Button
                  variant="contained"
                  color="primary"
                  startIcon={<AccountCircleIcon />}
                  component={Link}
                  onClick={() => {
                    localStorage.removeItem("user");
                    localStorage.setItem("state", false);
                  }}
                  to="/SignIn"
                >
                  Đăng Xuất
                </Atoms.Button>
              ) : (
                <Atoms.Button
                  variant="contained"
                  color="primary"
                  startIcon={<AccountCircleIcon />}
                  component={Link}
                  to="/SignIn"
                >
                  Đăng Nhập
                </Atoms.Button>
              )}
            </Atoms.Box>
          </Atoms.Box>
        </Atoms.Grid>
      </HeaderStyle>
    </>
  );
}

export default Header;
