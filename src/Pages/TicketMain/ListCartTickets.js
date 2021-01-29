import React from "react";
// import { CartContext } from "../../component/card-product";
import PropsTypes from "prop-types";
import Atoms from "../../component/MUI";
import ItemOnCard from "../../component/ItemOnCart";

function ListCartTickets({ cartLists }) {
  return (
    <div>
      <Atoms.Box>
        {cartLists &&
          cartLists.map((item, ix) => (
            <ItemOnCard
              key={(() => `${ix}`)()}
              img={item.imgCar}
              nameCar={item.nameCar}
              numberSeats={item.numberSeats}
              timeStart={item.timeStart}
              timeEnd={item.timeEnd}
              startingPlace={item.startingPlace}
              endLocation={item.endLocation}
              price={item.price}
              object={item}
              deleteTicket
            />
          ))}
      </Atoms.Box>
    </div>
  );
}

export default ListCartTickets;
ListCartTickets.PropsTypes = {
  cartLists: PropsTypes.any,
};
