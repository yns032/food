import React from "react";

function Product({ product, basket, setBasket }) {
  const number = basket.find((item) => item.id === product.id);

  function addBasket() {
    const addFind = basket.find((item) => item.id === product.id);
    if (addFind) {
      addFind.amount += 1;
      setBasket([...basket.filter((item) => item.id !== product.id), addFind]);
    } else {
      setBasket([
        ...basket,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          amount: 1,
        },
      ]);
    }
  }
  function removeBasket() {
    const removeFind = basket.find((item) => item.id === product.id);
    removeFind.amount -= 1;
    if (removeFind.amount === 0) {
      setBasket([...basket.filter((item) => item.id !== product.id)]);
    } else {
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        removeFind,
      ]);
    }
  }

  return (
    <div className="product">
      <img src={product.image} />
      <div className="title">
        <h4>{product.name}</h4>
        <div className="conta">
          <div className="money">
            <p>{product.price}$</p>
          </div>
          <div className="sepet">
            <button onClick={addBasket}>+</button>
            <b>{(number && number.amount) || 0}</b>
            <button onClick={removeBasket} disabled={!number}>
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
