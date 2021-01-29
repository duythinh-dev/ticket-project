import React, { useEffect, useState } from "react";
import Atoms from "../../component/MUI";

import ItemTicket from "../../component/ItemTicket";

function ListItemTicket() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [car, setCar] = useState(
    "https://5ff9781017386d0017b51dc9.mockapi.io/api/v1/ticketAll"
  );

  const resect = () => {
    setCar("https://5ff9781017386d0017b51dc9.mockapi.io/api/v1/ticketAll");
  };
  const xeVietTanPhat = () => {
    setCar(
      "https://5ff9781017386d0017b51dc9.mockapi.io/api/v1/ticketAll?carCode=car1"
    );
  };
  const xeMinhQuoc = () => {
    setCar(
      "https://5ff9781017386d0017b51dc9.mockapi.io/api/v1/ticketAll?carCode=car2"
    );
  };
  const sortListUpPice = () => {
    setCar(
      "https://5ff9781017386d0017b51dc9.mockapi.io/api/v1/ticketSortUpPice"
    );
  };
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(`${car}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          // console.log(result);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [car]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <>
        <Atoms.Backdrop open={true}>
          <Atoms.CircularProgress color="inherit" />
        </Atoms.Backdrop>
      </>
    );
  } else {
    return (
      <>
        <Atoms.Box mt={3}>
          <Atoms.Grid container spacing={2}>
            <Atoms.Grid item>
              <Atoms.Typography>
                <b>Sắp xếp theo:</b>
              </Atoms.Typography>
            </Atoms.Grid>
            <Atoms.Grid item>
              <Atoms.Button
                variant="contained"
                color="primary"
                onClick={sortListUpPice}
              >
                Sắp xếp giá
              </Atoms.Button>
            </Atoms.Grid>
            <Atoms.Grid item>
              <Atoms.Button
                variant="contained"
                color="primary"
                onClick={xeVietTanPhat}
              >
                Xe Việt Tân Phát
              </Atoms.Button>
            </Atoms.Grid>
            <Atoms.Grid item>
              <Atoms.Button
                variant="contained"
                color="primary"
                onClick={xeMinhQuoc}
              >
                Xe Minh Quốc
              </Atoms.Button>
            </Atoms.Grid>
            <Atoms.Grid item>
              <Atoms.Button
                variant="contained"
                color="primary"
                onClick={resect}
              >
                Resec
              </Atoms.Button>
            </Atoms.Grid>
          </Atoms.Grid>
        </Atoms.Box>
        {items.map((item) => (
          <ItemTicket
            key={item.id}
            img={item.imgCar}
            nameCar={item.nameCar}
            numberSeats={item.numberSeats}
            timeStart={item.timeStart}
            timeEnd={item.timeEnd}
            startingPlace={item.startingPlace}
            endLocation={item.endLocation}
            price={item.price}
            object={items[item.id - 1]}
            count={item.count}
          />
        ))}
      </>
    );
  }
}
export default ListItemTicket;
