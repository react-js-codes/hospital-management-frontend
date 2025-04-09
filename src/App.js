import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Patients from './pages/Patients';
import PatientList from './pages/Patients/PatientList';
import Staff from './pages/Staff';
import Finance from './pages/Finance';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/patients" component={Patients} />
          <PrivateRoute path="/patient-list" component={PatientList} />
          <PrivateRoute path="/staff" component={Staff} />
          <PrivateRoute path="/finance" component={Finance} />
          <Route path="/" exact component={Login} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;