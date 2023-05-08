import { addToCart, emptyCart, removeToCart } from "../action";
import { useDispatch } from "react-redux";
import { productList } from "../JobAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();
  let data = useSelector(state => state.productData);
  console.warn("data in main component", data);

  useEffect(() => {
    dispatch(productList());
  }, []);
  return (
    <div>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      <div className="product-container">
        {data.map(item =>
          <div className="product-item">
            <div>
              Job Id : {item.job_title}{" "}
            </div>
            <div>
              Question : {item.question}{" "}
            </div>
            <div>
              {item.options.map(option =>
                <div key={option.question_option_id}>
                  {option.question_option_title}
                </div>
              )}
            </div>

            <div>
              <button onClick={() => dispatch(addToCart(item))}>
                Add to Cart
              </button>
              <button onClick={() => dispatch(removeToCart(item.id))}>
                Remove to Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Main;
