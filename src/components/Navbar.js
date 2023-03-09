import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { totalQuantity } = useSelector((state) => state.cart);
  return (
    <nav>
      <div className="nav-cont">
        <h2>React Cart</h2>
        <div className="cart-icon">
          <FaShoppingCart className="cart" />
          <p>{totalQuantity}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
