import React from "react";
import ForwardIcon from "@material-ui/icons/Forward";
import imgmain from "../../img/main.png";
import Atoms from "../../component/MUI";
// import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import RoomIcon from "@material-ui/icons/Room";
import { useHistory } from "react-router";
// import Alert from "../Test/index";
function Home() {
  let history = useHistory();

  function handleClick() {
    history.push("/ticket");
  }
  return (
    <>
      <Atoms.Box
        height="100vh"
        width="100%"
        style={{
          backgroundImage: `url(${imgmain})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <Atoms.Box
          position="absolute"
          width="80%"
          m="auto"
          p={2}
          style={{
            margin: "0",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Atoms.Box display="flex" justifyContent="center">
            <Atoms.Typography variant="h4">
              <strong>
                VeXeRe.com - Hệ thống đặt vé xe khách lớn nhất Việt Nam
              </strong>
            </Atoms.Typography>
          </Atoms.Box>
          <Atoms.Box bgcolor="white" p={2} borderRadius="5px">
            <Atoms.Grid container spacing={1} justify="center">
              <Atoms.Grid
                item
                lg={3}
                md={3}
                xs={12}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Atoms.Typography variant="h4" color="primary">
                  <b>Nơi xuất phát : </b>
                </Atoms.Typography>
              </Atoms.Grid>
              <Atoms.Grid item lg={7} md={7} xs={12}>
                <Atoms.Box
                  height="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-around"
                >
                  <Atoms.Typography variant="h5" color="error">
                    <RoomIcon color="error" /> &nbsp;
                    <b>Tp Hồ Chí Minh</b>
                  </Atoms.Typography>
                  <ForwardIcon />
                  <Atoms.Typography variant="h5" color="error">
                    <RoomIcon color="error" />
                    &nbsp;
                    <b>Tp Kon Tum</b>
                  </Atoms.Typography>
                </Atoms.Box>
              </Atoms.Grid>
              <Atoms.Grid item xs={12} lg={2} md={2}>
                <Atoms.Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  size="medium"
                  style={{ height: "100%" }}
                  onClick={handleClick}
                >
                  <strong>Tìm Chuyến Xe</strong>
                </Atoms.Button>
              </Atoms.Grid>
            </Atoms.Grid>
          </Atoms.Box>
        </Atoms.Box>
      </Atoms.Box>
    </>
  );
}

export default Home;
