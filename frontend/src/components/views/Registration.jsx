import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { thunkNewUser } from "../../redux/thunks/thunkNewUser.js";


function Registration() {

  const history = useHistory();
  const dispatch = useDispatch();

  function authHandler(event) {
    event.preventDefault();

    if (event.target.password.value === event.target.checkPassword.value) {
      const newUser = {
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value,
      };

      dispatch(thunkNewUser(newUser))

      history.push('/');

    } else {

      alert('Пароли не совпали');
    }
    
  }

  return (
    <div className="auth container ">
      <form onSubmit={authHandler}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            placeholder="Имя"
            name="name"
          />
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Пароль"
              name="password"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword2"
              placeholder="Пароль еще раз"
              name="checkPassword"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
              name="email"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-outline-dark bg-secondary authButton">
          Регистрация
        </button>
      </form>
    </div>
  );
}

export default Registration;
