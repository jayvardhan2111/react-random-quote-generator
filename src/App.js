import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [quote, setQuote] = useState("Life is festivel, Celebrate it :) ");
  const [author, setAuthor] = useState("Sandeep ");
  const handleQuote = async (req, res) => {
    let result = await axios.get("https://api.quotable.io/random");
    setQuote(result.data.content);
    setAuthor(result.data.author);
    console.log(result.data.content);
  };

  return (
    <div className="App">
      <div className="quote">
        <h1>Quote of the day</h1>
        <h2>{quote}</h2>
        <small>--{author}</small>
        <br />
        <br />
        <button className="btn" onClick={handleQuote}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
