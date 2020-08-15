import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Gallery() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://official-joke-api.appspot.com/jokes/programming/ten"
    );
    const items = await data.json();
    console.log(items);
    setItems(items);
  };

  return (
    <div className="App">
      {items.map((item) => (
        <h1 key={item.id}>
          <Link to={`/gallery/${item.id}`}>{item.setup}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Gallery;
