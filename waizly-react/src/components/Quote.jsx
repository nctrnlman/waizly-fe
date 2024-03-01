// src/components/Quote.js

import React, { useState, useEffect } from "react";
import axios from "axios";

const Quote = ({ apiKey }) => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get("https://api.quotable.io/random");

        setQuote(response.data);
      } catch (error) {
        console.error("Error fetching quote data:", error);
      }
    };

    fetchQuote();
  }, [apiKey]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Random Quote</h2>
      {quote ? (
        <div>
          <p>Text: {quote.content}</p>
          <p>Author: {quote.author}</p>
        </div>
      ) : (
        <p>Loading quote data...</p>
      )}
    </div>
  );
};

export default Quote;
