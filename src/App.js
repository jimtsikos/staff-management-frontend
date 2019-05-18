import React from 'react';
import { NavLink, Link, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import BusinessesPage from './containers/business/businessesPage';
import BusinessFormPage from './containers/business/businessFormPage';
import StaffPage from './components/staff/staffPage';
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
            <NavLink to="/" className="nav-link">Businesses</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/staff/member/create" className="nav-link">Add member</NavLink>
          </li>
        </ul>
      </nav>

      <Route exact path="/" component={BusinessesPage}/>
      <Route path="/business/create" component={BusinessFormPage}/>
      <Route path="/business/edit/:id" component={BusinessFormPage}/>
      <Route path="/business/:id/staff" component={StaffPage}/>
      <Route path="/staff/member/create" component={StaffForm}/>
      <Route path="/staff/member/create/business/:id" component={StaffForm}/>
    </div>
  );
}

export default App;