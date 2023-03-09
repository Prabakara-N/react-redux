import CartItem from "./CartItem";

import { useSelector, useDispatch } from "react-redux";

import { openModal } from "../features/modal/modalSlice";

const CartContainer = () => {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  if (cartItems.length < 1) {
    return (
      <section>
        <div className="empty-msg-cont">
          <h1>Your Cart</h1>
          <p>is currently empty...</p>
        </div>
      </section>
    );
  }
  return (
    <section>
      <h1 className="ur-cart">Your Cart</h1>
      {cartItems.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}

      <div className="total-cont">
        <hr />
        <div className="total-amt">
          <h3>Total</h3>
          <h3>$ {totalPrice}</h3>
        </div>
        <div className="btn-clr">
          <button type="button" onClick={() => dispatch(openModal())}>
            Clear Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartContainer;
