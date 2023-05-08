import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MainNavbar from "../../components/CommonComponent/MainNavbar";
import MainFooter from "../../components/CommonComponent/MainFooter";

const Cart = () => {
  const cartData = useSelector(state => state.cartData);
  let amount =
    cartData.length &&
    cartData.map(item => item.price).reduce((prev, next) => prev + next);
  console.warn(amount);
  return (
    <div>
      <MainNavbar />

      <Link to="/JobView">Go to Products Link</Link>
      <h1>Cart Page</h1>
      <div className="cart-page-container">
        <table>
          <tr>
            <td>job_title</td>
            <td>question</td>
            <td>question_option_title</td>
          </tr>
          {cartData.map(item =>
            <tr key={item.key}>
              <td>
                {item.job_title}
              </td>
              <td>
                {item.question}
              </td>

              {/* <td>
                {item.options.question_option_title}
              </td> */}

              <td>
                {item.options.map(option =>
                  <div key={option.question_option_id}>
                    {option.question_option_title}
                  </div>
                )}
              </td>
            </tr>
          )}
        </table>
      </div>
      <MainFooter />
    </div>
  );
};

export default Cart;
