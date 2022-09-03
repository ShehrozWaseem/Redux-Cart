import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { useEffect } from "react";
import { fetchCartData } from "./store/cart-Actions.js";
import { sendCartData } from "./store/cart-Actions.js";

let isinit = true;
function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const notification = useSelector((state) => state.ui.notification);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCartData());
  }, []);

  useEffect(() => {
    if (isinit) {
      isinit = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);
  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
