import { useEffect, useState } from "react";
import Data from "../models/KanyeModle";
import fetchKanyeApi from "../services/kanyerestapi";

function Quote() {
  const [quote, setQuote] = useState<Data>();
  useEffect(() => {
    fetchKanyeApi().then((data) => setQuote(data));
  }, []);

  function changeQuote() {
    fetchKanyeApi().then((data) => setQuote(data));
  }

  setInterval(changeQuote, 43200000);

  return (
    <div className="Quote">
      <h3>"{quote?.quote}"</h3>
      <h5> - Kanye West</h5>
    </div>
  );
}

export default Quote;
