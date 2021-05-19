import React, { useState, useEffect } from "react";
import Axios from "axios";
import Coin from "./Coin";

const link =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    Axios.get(link)
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, [coins]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filterCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div className="main-container">
      <div className="search-container">
        <h1 className="title">Search Currency</h1>
        <input type="text" className="search-input" onChange={handleChange} />
      </div>
      <div className="container">
        {filterCoins.map((coin) => {
          return <Coin coin={coin} key={coin.id} />;
        })}
      </div>
    </div>
  );
}

export default App;
