import React from "react";
// import { CartContext } from "../../component/card-product";
import PropsTypes from "prop-types";
import Atoms from "../../component/MUI";
import CardTicket from "../../component/CardTicket";

function ListCartTickets({ cartLists }) {
  return (
    <div>
      <Atoms.Box>
        {!cartLists
          ? "null"
          : cartLists.map((item, ix) => (
              <CardTicket
                key={(() => `${ix}`)()}
                img={item.imgCar}
                nameCar={item.nameCar}
                numberSeats={item.numberSeats}
                timeStart={item.timeStart}
                timeEnd={item.timeEnd}
                startingPlace={item.startingPlace}
                endLocation={item.endLocation}
                price={item.price}
                object={cartLists[item.id - 1]}
                deleteTicket
              />
            ))}
      </Atoms.Box>
    </div>
  );
}

export default ListCartTickets;
ListCartTickets.PropsTypes = {
  cartLists: PropsTypes.array,
};
