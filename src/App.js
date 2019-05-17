import React from 'react';
import { NavLink, Link, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import BusinessesPage from './components/business/businessesPage';
import StaffPage from './components/staff/staffPage';
import BusinessForm from './components/business/businessForm'
import StaffForm from './components/staff/staffForm';

function App() {
  const style = {
      "marginBottom" : "20px"
  }

  return (
    <div className="container-fullwidth">
      <nav className="navbar navbar-expand-sm navbar-light bg-light" style={style}>
        <Link to={'/'} className="navbar-brand">Staff Management</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/businesses" className="nav-link">Businesses</NavLink>
          </li>
        </ul>
      </nav>

      <Route exact path="/businesses" component={BusinessesPage}/>
      <Route path="/business/create" component={BusinessForm}/>
      <Route path="/business/edit/:id" component={BusinessForm}/>
      <Route path="/business/:id/staff" component={StaffPage}/>
      <Route path="/staff/member/create" component={StaffForm}/>
      <Route path="/staff/member/create/business/:id" component={StaffForm}/>
    </div>
  );
}

export default App;