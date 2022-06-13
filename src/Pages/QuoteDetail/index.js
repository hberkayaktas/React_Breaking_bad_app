import React from "react";
import { useSelector } from "react-redux";
import { useParams,Navigate } from "react-router-dom";
import { quotesSelector } from "../../redux/quotesSlice";

function QuoteDetail() {
  const { quote_id } = useParams();
  const quote = useSelector((state) =>
    state.quotes.items.find((item) => item.quote_id === Number(quote_id))
  );
  if(!quote){
   return  <Navigate to="/" />
  }
      console.log(quote);
  return <div>{JSON.stringify(quote)}</div>;
}

export default QuoteDetail;
