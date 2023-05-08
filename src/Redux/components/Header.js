import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productSearch } from "../JobAction";
const Header = () => {
  const result = useSelector(state => state.cartData);
  const dispatch = useDispatch();
  console.warn("data in header", result);
  return (
    <div className="header">
      {/* <div className="search-box">
        <input
          type="text"
          onChange={event => dispatch(productSearch(event.target.value))}
          placeholder="Search Product"
        />
      </div> */}
      <Link to="/cart">
        <div className="cart-div">
          <Link to="/Cart">View Cart Details</Link>
        </div>
      </Link>
      <span>
        {result.length}
      </span>
    </div>
  );
};

export default Header;
