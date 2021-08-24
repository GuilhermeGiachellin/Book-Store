/* eslint-disable no-unused-vars */
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Categories from './categories.js';
import Books from './books.js';

function App() {
  return (
      <Router>
      <header>
        <h1>
          Books Store
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/" className="link">Books</Link>
            </li>
            <li>
              <Link to="/categories" className="link">Categories</Link>
            </li>
          </ul>
        </nav>
        </header>
      <Switch>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/">
          <Books />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
