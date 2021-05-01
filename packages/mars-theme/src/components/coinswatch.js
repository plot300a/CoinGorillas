import React, { useState, useEffect } from "react";
import { connect, styled } from "frontity";
import "./coinswatch.css";
import Coin from "./Coin";

export default function Coinwatch() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  console.log("render");

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        console.log(coins);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <CoinAppWraper>
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input
            className="coin-input"
            type="text"
            onChange={handleChange}
            placeholder="Search"
          />
        </form>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </CoinAppWraper>
  );
}

const CoinAppWraper = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 14px;
  color: #fff;
  border: 0px solid lime;
padding-right: 20px;

  .coin-search {
  margin-bottom: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.coin-text {
  margin-bottom: 32px;
  text-align: center;
}

.coin-input {
  padding-left: 16px;
  width: 300px;
  height: 50px;
  border-radius: 4px;
  border: none;
  background-image: linear-gradient(
    -225deg,
    #191a19 0%,
    #251f1f 48%,
    #191a19 100%
  );

  color: #e2e2e2;
}

.coin-input::placeholder {
  color: #e2e2e2;
}

.coin-container {
  display: flex;
  justify-content: center;
}

.coin-row {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #d7d7d7;
  width: 900px;
}

.coin {
  display: flex;
  align-items: center;
  padding-right: 24px;

  min-width: 300px;
}

.coin h1 {
  font-size: 16px;
  width: 150px;
}

.coin img {
  height: 30px;
  width: 30px;
  margin-right: 10px;
}

.coin-symbol {
  text-transform: uppercase;
}

.coin-data {
  display: flex;
  text-align: right;
  justify-content: space-between;
  width: 100%;
}

.coin-price {
  width: 110px;
}

.coin-volume {
  width: 155px;
}

.coin-marketcap {
  width: 230px;
}

.coin-percent {
  width: 100px;
}

.red {
  color: #f00606;
}

.green {
  color: #11d811;
}


}
`;
