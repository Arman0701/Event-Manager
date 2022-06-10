import React from "react";
import {  useDispatch } from "react-redux";
import { decrease, increase, remove } from '../../store/cart/cartSlice'
// import { decrease, getCartTotal, increase, remove } from "./redux/actions";

const CartItem = ({ id,title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="row" style={{ marginTop: "10px", marginLeft: "80px",marginRight:"20px" }}>
        <div className="col-sm-2" margin>
          <h5>{title}</h5>
          <h5 style={{ color: "#6c757d" }}>${price}</h5>
          <div
            icon="trash"
            style={{ cursor: "pointer", color: "red" }}
            onClick={() => dispatch(remove(id))}
          />
        </div>
        <div className="col-sm-8">
          <button
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(increase(id))}
          >+</button>
          <p style={{ marginTop: "10px" }}>{amount}</p>
          <button
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(decrease(id))}
          >-</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;