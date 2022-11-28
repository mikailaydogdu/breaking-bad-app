import { useParams, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function QuotesDetail() {
  const { quote_id } = useParams();
  const quote = useSelector((state) =>
    state.quotes.items.find((item) => item.quote_id === Number(quote_id)),
  );

  return (
    <div style={{ textAlign: "center" }}>
      {quote && (
        <div>
          <h3>"{quote.quote}"</h3>
          -  {quote.author}
        </div>
      )}

      {!quote && <Navigate replace to="/quotes" />}
      
    </div>
  )
}

export default QuotesDetail;

