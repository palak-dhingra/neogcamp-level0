import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "🦊": "fox",
  "🐵": "monkey Face",
  "🦄": "unicorn",
  "🎭": "purim",
  "🍷": "wine glass",
  "🥁": "drum"
};

var emojis = Object.keys(emojiDictionary);
console.log(emojis);
export default function App() {
  const [meaning, setMeaning] = useState("🔮 translation will appear here");

  function emojiHandler(event) {
    var emoji = event.target.value.trim();
    if (emoji in emojiDictionary) {
      setMeaning(emoji + " " + emojiDictionary[emoji]);
    } else {
      setMeaning("🐄 oops couldn't find your " + emoji + " in our database");
    }
  }

  function emojiIconHandler(emoji) {
    setMeaning(emoji + " " + emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1>inside outttttt</h1>
      <input onChange={emojiHandler} placeholder="search your emoji" />
      <h2>{meaning}</h2>
      {emojis.map((item) => {
        return (
          <span
            key={item}
            onClick={() => emojiIconHandler(item)}
            style={{ fontSize: "2rem", padding: "0.5rem" }}
          >
            {" "}
            {item}{" "}
          </span>
        );
      })}
    </div>
  );
}
