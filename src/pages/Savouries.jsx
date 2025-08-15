import React from "react";
import { byCategory } from "../data/products";

export default function Savouries() {
  const savouries = byCategory("savories");

  return (
    <div className="product-grid">
      {savouries.map((item) => (
        <div key={item.id} className="product-card">
          <img src={item.img} alt={item.name} className="product-image" />
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
        </div>
      ))}
    </div>
  );
}
