import { useEffect } from "react";
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from './components/views/Main.jsx'
import Navigation from './components/Navigation.jsx'
import Login from "./components/views/Login.jsx";
import Registration from "./components/views/Registration.jsx";
import { thunkAuth } from "./redux/thunks/thunkAuth";
import PrivateRoute from "./components/PrivateRoute.jsx";

function App() {

  const dispatch = useDispatch();

  const user = useSelector(state => state.user)

  useEffect(() => {
    dispatch(thunkAuth())
  }, [dispatch])

  return (
    <Router>
      <div className="App">

        <Navigation />

        {user.user === null && <h1 className='textCenter'> Войдите или Зарегистрируйтесь</h1>}

        <Switch>

          <Route path='/registration' component={Registration} />
          <Route path='/login' component={Login} />
          <Route path='/' component={Main} exact />
          <PrivateRoute path='/profile' />

        </Switch>

      </div>
    </Router>
  );
}

export default App;
