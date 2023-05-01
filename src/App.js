import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Product from "./components/Product";
import products from "./products.json";
function App() {
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState("");
  useEffect(() => {
    const totalPrice = basket.reduce(
      (pre, basket) => pre + basket.amount * basket.price,
      0
    );
    setTotal(totalPrice);
  }, [basket]);

  return (
    <div className="App">
      <div className="head">
        <Header />
        <Cart basket={basket} total={total} setTotal={setTotal} />
      </div>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          basket={basket}
          setBasket={setBasket}
        />
      ))}
    </div>
  );
}

export default App;
