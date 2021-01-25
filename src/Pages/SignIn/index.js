import React from "react";
// import PropsTypes from "prop-types";
import Atoms from "../../component/MUI";
import bgimg from "../../img/mountains.jpg";
function SignIn() {
  return (
    <Atoms.Box
      height="88.5vh"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        position: "relative",
      }}
    >
      <Atoms.Box
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          width: "300px",
          height: "350px",
        }}
      >
        <Atoms.Grid container spacing={2}>
          <Atoms.Grid item xs={12}>
            <Atoms.Box display="flex" justifyContent="center">
              <Atoms.Typography variant="h4" style={{ fontWeight: 700 }}>
                Đăng Nhập
              </Atoms.Typography>
            </Atoms.Box>
          </Atoms.Grid>
          <Atoms.Grid item xs={12}>
            <Atoms.Box>
              <Atoms.TextField
                fullWidth
                variant="filled"
                size="small"
                label="Tài Khoản"
              ></Atoms.TextField>
            </Atoms.Box>
          </Atoms.Grid>
          <Atoms.Grid item xs={12}>
            <Atoms.Box>
              <Atoms.TextField
                fullWidth
                variant="filled"
                size="small"
                label="Mật khẩu"
                type="password"
                color="primary"
              ></Atoms.TextField>
            </Atoms.Box>
          </Atoms.Grid>
          <Atoms.Grid item xs={12}>
            <Atoms.Box display="flex" justifyContent="center">
              <Atoms.Button
                variant="contained"
                style={{
                  backgroundImage: `linear-gradient(to right, #eba879 0%, #EAECC6 80%, #eba879 100%)`,
                }}
                // onClick={componentDidMount(username, password)}
              >
                Đăng Nhập
              </Atoms.Button>
            </Atoms.Box>
          </Atoms.Grid>
        </Atoms.Grid>
      </Atoms.Box>
    </Atoms.Box>
  );
}

export default SignIn;
