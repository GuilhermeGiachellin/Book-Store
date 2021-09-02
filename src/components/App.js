/* eslint-disable no-unused-vars */
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Categories from './categories.js';
import List from './books/list.js';
import loginimg from '../assets/userIcon.svg';

const App = () => (
      <Router>
      <header>
        <div className="title_nav_cnt">
        <h1>
          Books Store CMS
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/" className="link">BOOKS</Link>
            </li>
            <li>
              <Link to="/categories" className="link">CATEGORIES</Link>
            </li>
          </ul>
        </nav>
        </div>
        <div className="header_oval">
          <img src={loginimg}/>
        </div>
        </header>
      <Switch>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/">
          <List />
        </Route>
      </Switch>
    </Router>
);

export default App;
