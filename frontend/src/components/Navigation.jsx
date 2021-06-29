import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

function Navigation() {

  const user = useSelector(state => state.user)
  const dispatch = useDispatch();

  console.log(user);


  return (
    <nav>
      <div className="nav-wrapper">

        <Link className="brand-logo" to='/'>TODO</Link>

        <ul id="nav-mobile" className="right">

          <li>{user.user !== null ? <Link to='/'>Главная</Link> : ''} </li>

          <li>{user.user === null && <Link to="/registration">Зарегистироваться</Link>} </li>

          <li>{user.user === null && <Link to="/login" >Войти</Link>}</li>

          <li> {user.user !== null && <Link to="/profile">Профиль</Link>}</li>

          <li>{user.user !== null ? <Link onClick={() => dispatch({ type: 'LOGOUT' })} to="/" >Выйти </Link> : ''}</li>

        </ul>
      </div>
    </nav >
  )
}

export default Navigation
