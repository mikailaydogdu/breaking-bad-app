import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

import Home from './pages/Home';
import Quotes from './pages/Quotes';
import Detail from './pages/Detail';
import QuotesDetail from './pages/QuotesDetail';

function App() {
  return (
       <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link className='Link' to="/">Home</Link>
            </li>            
            <li>
              <Link className='Link' to="/quotes">Quotes</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/quotes" element={<Quotes />} />
          <Route path="/" element={<Home />}/>
          <Route path="/detail/:char_id" element={<Detail />}/>
          <Route path="/quote/:quote_id" element={<QuotesDetail />}/>
        </Routes>
      </div>
    </Router>
  );
}



export default App;


