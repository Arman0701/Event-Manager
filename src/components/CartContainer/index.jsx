import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { clearCart, getCartTotal } from "./redux/actions";
import CartItem from "./CartItem";
import {
  clearCart,
  getCartItems,
  getCartTotal,
} from "../../store/cart/cartSlice";
import EventTitle from "../EventTitle";
import './style.scss'

const CartContainer = () => {
  const { totalAmount, items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [items]);

  if (items.length === 0) {
    return (
      <>
        <h3 className="fs-bold" style={{ marginTop: "20px" }}>
          Your Shopping{" "}
          <span>
           bag
          </span>{" "}
          is Empty
        </h3>
        <button
          className="mx-2"
          style={{ marginRight: "100px" }}
          onClick={() => dispatch(getCartItems())}
        >
          Get Items
        </button>
      </>
    );
  }
  return (
    <div>
     <EventTitle title2='Register' strongtitle=' now'/>
     <div className="header">Sales end on December 31</div>
      {items.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <footer>
        <hr />
        <div>
          <h4
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginRight: "60px",
            }}
          >
            Total <span>${totalAmount}</span>
          </h4>
        </div>

        <button
          color="danger"
          onClick={() => dispatch(clearCart())}
          style={{ width: "140px", marginTop: "50px" }}
        >
          Clear Cart
        </button>
      </footer>
    </div>
  );
};

export default CartContainer;