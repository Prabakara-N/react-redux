import React, { useEffect } from "react";
import "./styles/App.css";
import "./styles/normalize.css";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";

const App = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { isModalOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <>
      {isModalOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </>
  );
};

export default App;
