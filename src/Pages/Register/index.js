import React from "react";
// import PropsTypes from "prop-types";
import Atoms from "../../component/MUI";
import bgimg from "../../img/mountains.jpg";
import { useDispatch } from "react-redux";
import { useActions } from "../../actions/user.actions";
function Registration() {
  const [user, setUser] = React.useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });
  const [submit, setSubmit] = React.useState(false);
  const dispatch = useDispatch;

  function handleChange(e) {
    console.log(e.target.value);
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  }

  const handleSubmit = (e) => {
    // e.preventDefault();
    setSubmit(true);
    dispatch(useActions.register(user));
  };
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
                Đăng Ký
              </Atoms.Typography>
            </Atoms.Box>
          </Atoms.Grid>
          <Atoms.Grid item xs={12}>
            <Atoms.Box>
              <Atoms.TextField
                fullWidth
                variant="filled"
                name="firstName"
                size="small"
                label="Tài Khoản"
                onChange={handleChange}
              ></Atoms.TextField>
            </Atoms.Box>
          </Atoms.Grid>
          <Atoms.Grid item xs={12}>
            <Atoms.Box>
              <Atoms.TextField
                fullWidth
                variant="filled"
                name="lastName"
                size="small"
                label="Tài Khoản"
                onChange={handleChange}
              ></Atoms.TextField>
            </Atoms.Box>
          </Atoms.Grid>
          <Atoms.Grid item xs={12}>
            <Atoms.Box>
              <Atoms.TextField
                fullWidth
                variant="filled"
                name="username"
                size="small"
                label="Tài Khoản"
                onChange={handleChange}
              ></Atoms.TextField>
            </Atoms.Box>
          </Atoms.Grid>
          <Atoms.Grid item xs={12}>
            <Atoms.Box>
              <Atoms.TextField
                fullWidth
                variant="filled"
                name="password"
                size="small"
                label="Mật khẩu"
                type="password"
                onChange={handleChange}
                color="primary"
              />
            </Atoms.Box>
          </Atoms.Grid>
          <Atoms.Grid item xs={12}>
            <Atoms.Box display="flex" justifyContent="center">
              <Atoms.Button
                variant="contained"
                style={{
                  backgroundImage: `linear-gradient(to right, #eba879 0%, #EAECC6 80%, #eba879 100%)`,
                }}
                onClick={handleSubmit}
              >
                Đăng Ký
              </Atoms.Button>
            </Atoms.Box>
          </Atoms.Grid>
        </Atoms.Grid>
      </Atoms.Box>
    </Atoms.Box>
  );
}

export default Registration;