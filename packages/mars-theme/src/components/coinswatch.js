import React, { useState, useEffect } from "react";

export default function Coinwatch() {
  const [coinType, setCoinType] = useState("Doge");
  const [items, setItems] = useState([]);

  console.log("render");

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [coinType]);

  return (
    <>
      <div>
        <button onClick={() => setCoinType("coins.1")}>Bitcoin</button>
        <button onClick={() => setCoinType("users")}>Etherium</button>
        <button onClick={() => setCoinType("comments")}>Comments</button>
      </div>
      <h1>{coinType}</h1>
      {items.map((items) => {
        return <pre>{JSON.stringify(items)}</pre>;
      })}
    </>
  );
}
