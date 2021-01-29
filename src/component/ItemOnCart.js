import React, { useState } from "react";
import PropsTypes from "prop-types";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";

import BlurCircularIcon from "@material-ui/icons/BlurCircular";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import CheckIcon from "@material-ui/icons/Check";
import Atoms from "./MUI";
import { makeStyles } from "@material-ui/core";
import { CartContext } from "./card-product";
const useStyles = makeStyles((theme) => ({
  media: {
    height: "200px",
    width: "200px",
    // paddingTop: "56.25%", // 16:9
  },
  seeMore: {
    cursor: "pointer",
  },
}));
const dataUtilities = [
  {
    id: "1",
    label: "Dép",
    title:
      "Khi dừng ở trạm dừng chân sẽ có dép của nhà xe cho hành khách xuống xe",
  },
  {
    id: "2",
    label: "Dây đai an toàn",
    title:
      "Trên xe có trang bị dây đai an toàn cho hành khách khi ngồi trên xe",
  },
  {
    id: "3",
    label: "Gửi kèm xe máy",
    title: "Nhà xe cho khách gửi kèm theo xe máy",
  },
  {
    id: "4",
    label: "Khử trùng xe",
    title:
      "Nhà xe có thực hiện phun khử trùng Nano Bạc lên xe nhằm bảo vệ an toàn cho hành khách mùa Covid",
  },
  {
    id: "5",
    label: "Nước rửa tay",
    title:
      "Nhà xe có trang bị nước rửa tay diệt khuẩn trước khi lên xe và trong xe",
  },
  {
    id: "6",
    label: "Khuyến cáo đeo khẩu trang",
    title: "Có đảm bảo khuyến cáo tất cả hành khách đeo khẩu trang khi lên xe",
  },
  {
    id: "7",
    label: "Nước uống",
    title: "Nhà xe có phục vụ nước cho hành khách",
  },
  {
    id: "8",
    label: "Gối nằm",
    title: "Trên xe có trang bị gối nằm",
  },
];
const Utilities = ({ label, title }) => (
  <Atoms.Box>
    <Atoms.Box display="flex" alignItems="center">
      <CheckIcon fontSize="small" color="primary" />
      &nbsp;
      <Atoms.Typography color="primary">
        <b>{label}</b>
      </Atoms.Typography>
    </Atoms.Box>
    <Atoms.Box my={1}>
      <Atoms.Typography variant="body2" color="textPrimary">
        {title}
      </Atoms.Typography>
    </Atoms.Box>
    <Atoms.Divider />
  </Atoms.Box>
);
Utilities.PropsTypes = {
  label: PropsTypes.string,
  title: PropsTypes.string,
};
function ItemOnCard({
  img,
  nameCar,
  numberSeats,
  timeStart,
  timeEnd,
  startingPlace,
  endLocation,
  price,
  object,
  count,
}) {
  const classes = useStyles();
  const [utilitiesState, setUtilitiesState] = useState(false);
  const seeUtilities = () => {
    setUtilitiesState(!utilitiesState);
  };
  console.log(object.count, "bien cout day");
  const money = price * object.count;
  return (
    <div>
      <Atoms.Box component={Atoms.Paper} mt={2} p={2} elevation={3}>
        <Atoms.Grid container spacing={1}>
          <Atoms.Grid item lg={3}>
            <Atoms.CardMedia
              className={classes.media}
              image={img}
              title="Paella dish"
            />
          </Atoms.Grid>
          <Atoms.Grid item lg={5}>
            <Atoms.Typography variant="h5" color="primary">
              <b>{nameCar}</b>
            </Atoms.Typography>
            <br />
            <Atoms.Typography variant="body2">
              Ghế ngồi {numberSeats} chỗ
            </Atoms.Typography>
            <br />
            <Atoms.Box display="flex" alignItems="center" mb={3}>
              <BlurCircularIcon /> &nbsp;
              <Atoms.Typography variant="h6">
                <b>{timeStart} •</b>
              </Atoms.Typography>
              <Atoms.Typography>&nbsp;{startingPlace}</Atoms.Typography>
            </Atoms.Box>
            <Atoms.Box display="flex" alignItems="center">
              <RoomOutlinedIcon /> &nbsp;
              <Atoms.Typography variant="h6">
                <b>{timeEnd} •</b>
              </Atoms.Typography>
              <Atoms.Typography>&nbsp; {endLocation}</Atoms.Typography>
            </Atoms.Box>
          </Atoms.Grid>
          <Atoms.Grid item lg={2}>
            <Atoms.Box display="flex" alignItems="flex-end" height="100%">
              <Atoms.Box
                display="flex"
                alignItems="center"
                onClick={seeUtilities}
                className={classes.seeMore}
              >
                <Atoms.Typography color="primary" variant="body2">
                  Thông tin chi tiết
                </Atoms.Typography>
                {!utilitiesState ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
              </Atoms.Box>
            </Atoms.Box>
          </Atoms.Grid>
          <Atoms.Grid item lg={2}>
            <Atoms.Box>
              <Atoms.Box width="100%" display="flex" justifyContent="flex-end">
                <Atoms.Typography color="primary">
                  <b>{money.toLocaleString()} VNĐ</b>
                </Atoms.Typography>
              </Atoms.Box>

              <Atoms.Box display="flex">
                <Atoms.Typography>Số vé :</Atoms.Typography>
                <Atoms.Badge badgeContent={object.count} color="secondary">
                  <ConfirmationNumberIcon />
                </Atoms.Badge>
              </Atoms.Box>

              <Atoms.Box
                width="100%"
                display="flex"
                justifyContent="flex-end"
                mt="100%"
              >
                <CartContext.Consumer>
                  {({ updateDeleteCart }) => (
                    <Atoms.Button
                      variant="contained"
                      color="secondary"
                      onClick={() => updateDeleteCart(object)}
                    >
                      Hủy vé
                    </Atoms.Button>
                  )}
                </CartContext.Consumer>
              </Atoms.Box>
            </Atoms.Box>
          </Atoms.Grid>
        </Atoms.Grid>
        <Atoms.Collapse in={utilitiesState}>
          <Atoms.Box mt={2}>
            <Atoms.Divider />
            <br />
            <Atoms.Grid container>
              <Atoms.Grid item xs={12}>
                <Atoms.Typography variant="h6" color="secondary">
                  <b>Tiện ích</b>
                </Atoms.Typography>
              </Atoms.Grid>
              <Atoms.Grid item xs={12}>
                <Atoms.Box p={2}>
                  {dataUtilities.map((item) => (
                    <Utilities
                      title={item.title}
                      label={item.label}
                      key={item.id}
                    />
                  ))}
                </Atoms.Box>
              </Atoms.Grid>
            </Atoms.Grid>
          </Atoms.Box>
        </Atoms.Collapse>
      </Atoms.Box>
    </div>
  );
}

export default ItemOnCard;
ItemOnCard.propsTypes = {
  img: PropsTypes.any,
  nameCar: PropsTypes.string,
  timeStart: PropsTypes.any,
  timeEnd: PropsTypes.any,
  startingPlace: PropsTypes.any,
  endLocation: PropsTypes.any,
  price: PropsTypes.any,
  object: PropsTypes.any,
  deleteTicket: PropsTypes.bool,
  count: PropsTypes.number,
};
// ItemOnCard.defaultProps = {
//   nameCar: "Xe việt tân phát",
// };
