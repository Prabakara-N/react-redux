import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <div className="modal-cont">
      <p>Remove ALL Items From Your Shopping Cart?</p>
      <div className="btn-cont">
        <button
          type="button"
          className="btn-blue"
          onClick={() => {
            dispatch(clearCart());
            dispatch(closeModal());
          }}
        >
          CONFIRM
        </button>
        <button
          type="button"
          className="btn-red"
          onClick={() => dispatch(closeModal())}
        >
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default Modal;
