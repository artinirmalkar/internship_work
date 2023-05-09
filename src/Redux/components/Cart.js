import { useSelector } from "react-redux";
import MainNavbar from "../../components/CommonComponent/MainNavbar";
import MainFooter from "../../components/CommonComponent/MainFooter";
import Card from "react-bootstrap/Card";
const Cart = () => {
  const cartData = useSelector(state => state.cartData);
  return (
    <div>
      <MainNavbar />

      <div>
        {cartData.map(item =>
          <Card style={{ width: "90%", height: "50%" }}>
            <Card.Header key={item.key}>
              {item.job_title}
            </Card.Header>
            <Card.Body>
              <Card.Title>
                {item.question}
              </Card.Title>
              {item.options.map(option =>
                <Card.Text key={option.question_option_id}>
                  {option.question_option_title}
                </Card.Text>
              )}
            </Card.Body>
          </Card>
        )}
      </div>
      <MainFooter />
    </div>
  );
};

export default Cart;
