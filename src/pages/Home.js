import { useEffect } from 'react';
import Masonry from 'react-masonry-css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCharacters } from '../redux/charactersSlice';
import Loading from '../components/Loading';
import Error from '../components/Error';


import {
  Link,
} from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.items);
  const nextPage = useSelector((state) => state.characters.page);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);
  const status = useSelector((state) => state.characters.status);
  const error = useSelector((state) => state.characters.error);


  useEffect(() => {
    if(status === "idle"){
      dispatch(fetchCharacters());
    }
  }, [dispatch, status]);


  if (status === "failed") {
    return <Error message={error}/>
  }

  return (
    <div>
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {
          characters.map((item) => (
            <div key={item.char_id}>
              <Link style={{textDecoration:"none"}} to={`/detail/${item.char_id}`}>
                <img style={{ width: "100%", height: "300px" }} src={item.img} alt="Character" />
                <div style={{ padding: "5px 0", fontSize: "20px", textAlign:"center" }}> {item.name}</div>
                <h6 style={{ textAlign:"center" }}>[{item.occupation}]</h6>
              </Link>
            </div>))
        }
      </Masonry>
      <div style={{ padding: "20px 0 40px 0", textAlign: "center" }}>
        {status === "loading" && <Loading />}
        {hasNextPage && status !== "loading" && (
          <button onClick={() => dispatch(fetchCharacters(nextPage))}>
            Load More ({nextPage})
          </button>
        )}
        {!hasNextPage && <div>There is nothing to be shown.</div>}
      </div>
    </div>
  )
}

export default Home;
