import React from "react";

function Cart({ basket, total }) {
  return (
    <div className="cart">
      <div className="list">
        <h2>SEPET</h2>
        {(basket.length === 0 && <p>not fount result</p>) || null}
        {basket.map((item) => (
          <div className="basketList">
            <img width="50px" src={item.image} />
            <p>
              $ {item.price} x {item.amount}
            </p>
          </div>
        ))}
        {(total && <p>Total:${total}</p>) || null}
      </div>
    </div>
  );
}
export default Cart;
