import { useDispatch } from "react-redux";
import { thunkLogin } from "../../redux/thunks/thunkLogin.js";
import { useHistory } from 'react-router-dom'

function Login() {

  const dispatch = useDispatch()
  const history = useHistory()

  function loginHandler(event) {
    event.preventDefault();

    const logInfo = {
      loginEmail: event.target.loginEmail.value,
      loginPassword: event.target.loginPassword.value,
    };

    dispatch(thunkLogin(logInfo));

    history.push('/')

  }
  return (
    <div className="login container">
      <form onSubmit={loginHandler}>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="loginInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
            name="loginEmail"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="loginInputPassword1"
            placeholder="Password"
            name="loginPassword"
          />
        </div>
        <button type="submit" className="btn btn-outline-dark bg-secondary loginButton">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
