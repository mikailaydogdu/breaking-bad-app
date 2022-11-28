import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllQuotes } from '../redux/quotesSlice';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';

function Quotes() {
  const data = useSelector((state) => state.quotes.items);
  const error = useSelector((state) => state.quotes.error);
  const status = useSelector((state) => state.quotes.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAllQuotes());
    }
  }, [dispatch, status]);

  if (error) {
    return <Error message={error} />
  }
  return (
    <div style={{textAlign:"center"}}>
       <Masonry
          breakpointCols={1}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
      {status === "loading" && <Loading />}
      {status === "succeeded" && data.map((item) =>
       
          <div key={item.quote_id}>
            <Link className='Link' to={`/quote/${item.quote_id}`} >
              "{item.quote}" - {item.author}
            </Link>
          </div>
      )}
              </Masonry>

    </div>
  )
}

export default Quotes;
