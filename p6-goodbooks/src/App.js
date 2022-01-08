import { useState } from "react";
import "./styles.css";

var booksDictionary = {
  fiction: [
    {
      name: "Harry Potter and the Sorcere's Stone",
      rating: "4.5/5"
    },
    {
      name: "Shiva Triology",
      rating: "5/5"
    }
  ],
  javascript: [
    {
      name: "Eloquent JavaScript",
      rating: "4/5"
    },
    {
      name: "You Don't Know JS",
      rating: "3.5/5"
    }
  ]
};

var genres = Object.keys(booksDictionary);

export default function App() {
  const [genre, setGenre] = useState("javascript");
  function setGrenreForBooks(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>📚 goodbooks</h1>
      <small>Checkout my favorite books. Select a genre to get started</small>

      {genres.map((item) => {
        return (
          <button key={item} onClick={() => setGrenreForBooks(item)}>
            {item}
          </button>
        );
      })}
      <hr />
      <ul class="list-no-bullet">
        {booksDictionary[genre].map((item) => {
          return (
            <li key={item.name} class="list-item">
              <div style={{ fontSize: "larger" }}>{item.name}</div>
              <div style={{ fontSize: "smaller" }}>{item.rating}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
