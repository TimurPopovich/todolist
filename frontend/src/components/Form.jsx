import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TASK } from "../redux/actionTypes/actionTypes";
import ButtonTask from "./ButtonTask.jsx";

function Form() {

  const dispatch = useDispatch()
  const id = useSelector(state => state.user._id)

  const task = useRef()

  const formHandler = async (event) => {
    event.preventDefault()

    if (event.target.task.value === '') {
      return false
    } else {

      const title = task.current.value

      const response = await fetch('/list', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          id,
        })
      });

      const result = await response.json();

      dispatch({ type: ADD_TASK, payload: result.newPost })
    }

    event.target.reset()
  }



  return (
    <div className="containerForm row">
      <form onSubmit={formHandler} className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <label>Задача</label>
            <input ref={task} name='task' type="text" className="validate"></input>
            <ButtonTask />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form
