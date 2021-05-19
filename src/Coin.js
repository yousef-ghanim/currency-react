import React from "react";

const Coin = ({ coin }) => {
  const {
    name,
    symbol,
    current_price,
    image,
    market_cap,
    price_change_percentage_24h: priceChange,
    total_volume,
  } = coin;
  return (
    <div className="coin">
      <div className="logo">
        <img src={image} alt="crypto" />
        <p>{symbol}</p>
      </div>
      <h1 className="name">{name}</h1>
      <div className="info">
        <div className="price-container">
          <p>${current_price}</p>
          <p>${total_volume.toLocaleString()}</p>
        </div>
        <p style={priceChange < 0 ? { color: "red" } : { color: "green" }}>
          {priceChange.toFixed(2)}%
        </p>
        <p>Mkt Cap: ${market_cap.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Coin;
