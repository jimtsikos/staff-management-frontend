import React from 'react';
import { Link, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import BusinessesPage from './components/business/businessesPage';

function App() {
  return (
    <div className="container-fullwidth">
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link to={'/'} className="navbar-brand">Staff Management</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/business" className="nav-link">Businesses</Link>
          </li>
        </ul>
      </nav>

      <Route path="/business" component={BusinessesPage}/>
    </div>
  );
}

export default App;