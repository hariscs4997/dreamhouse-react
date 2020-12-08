import Header from './header';
import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import home from './home';
import Login from './components/auth/login';
import Register from './components/auth/register';
import UserLogin from './components/auth/userLogin';
import Admin from './components/Admin/admin';
import User from './components/User/user';
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/login" Component={Login}>
          <Login />
        </Route>
        <Route path="/register" Component={Register}>
          <Register />
        </Route>
        <Route path="/Userlogin" Component={UserLogin}>
          <UserLogin />
        </Route>
        <Route path="/home" component={home} />
        <Route path="/admin" component={Admin} />
        <Route path="/user" component={User} />
        <Redirect from="/" exact to="/home" />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;
