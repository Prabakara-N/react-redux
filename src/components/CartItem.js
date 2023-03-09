import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  removeItem,
  increaseItem,
  decreaseItem,
} from "../features/cart/cartSlice";

const CartItem = ({ id, title, price, img, quantity }) => {
  const dispatch = useDispatch();
  return (
    <div className="cart-item" key={id}>
      <div className="img-prize-cont">
        <div className="img-cont">
          <img src={img} alt={title} />
        </div>
        <div>
          <h3>{title}</h3>
          <p className="prize">${price}</p>
          <p className="remove" onClick={() => dispatch(removeItem(id))}>
            Remove
          </p>
        </div>
      </div>
      <div className="up-down">
        <div className="arrow" onClick={() => dispatch(increaseItem(id))}>
          <FaAngleUp />
        </div>
        <p className="amt">{quantity}</p>
        <div
          className="arrow arr-down"
          onClick={() => dispatch(decreaseItem(id))}
        >
          <FaAngleDown />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
