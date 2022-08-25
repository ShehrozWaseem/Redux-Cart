import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
const Cart = (props) => {
  const cart_items = useSelector((state) => state.cart.items);
  const cartAmt = useSelector((state) => state.cart.cartTotalPRice);
  return (
    <Card className={classes.cart}>
      <h3>Total Cart Price: {cartAmt}$</h3>
      <ul>
        {cart_items.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
