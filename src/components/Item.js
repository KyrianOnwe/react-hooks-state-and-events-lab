import React, { useState } from "react";

function Item({ name, category }) {
  const [status, setStatus] = useState(false); 

  function switchStatus(){
    setStatus(() => !status)

  }

  const inCart = status ? "in-cart" : "";

  const addOrRemove = !status ? "Add to Cart" : "Remove From Cart"

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={switchStatus}>{addOrRemove}</button>
    </li>
  );
}

export default Item;
