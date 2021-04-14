import "./styles.css";
import { useState } from "react";

const foodsDB = {
  Mumbai: [
    { name: "Bhel Puri", rating: "4/5" },
    { name: "Puran Poli", rating: "4/5" },
    { name: "Batata Vada", rating: "3.5/5" }
  ],

  Kashmir: [
    {
      name: "Mutton Rogan Josh",
      rating: "5/5"
    },
    {
      name: "Kashmiri Saag",
      rating: "5/5"
    },
    {
      name: "Yogurt Lamb Curry",
      rating: "4.5/5"
    }
  ],

  Gujarat: [
    {
      name: "Dhokla",
      rating: "5/5"
    },
    {
      name: "Khandvi",
      rating: "4/5"
    },
    {
      name: "Undhiyu",
      rating: "3.5/5"
    }
  ],

  Goa: [
    {
      name: "Pork vindaloo",
      rating: "5/5"
    },
    {
      name: "Kingfish",
      rating: "4/5"
    },
    {
      name: "Bebinca",
      rating: "3.5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Mumbai");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>
        {" "}
        <span role="img" aria-label="food emoji">
          🍲
        </span>{" "}
        goodfood
      </h1>
      <p style={{ fontSize: "smaller" }}>
        Checkout my favorite foods. Select a city to get started!
      </p>

      <div>
        {Object.keys(foodsDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodsDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div>
                <span style={{ fontSize: "larger" }}> {book.name} </span>
                <span style={{ fontSize: "smaller" }}> {book.rating} </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
