import { useDispatch } from "react-redux";
import { UPDATE_STATUS } from "../redux/actionTypes/actionTypes";

function ButtonCreate(props) {

  const dispatch = useDispatch();

  const taskDelete = async (id) => {

    const response = await fetch('/list', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
      })
    })

    if (response.ok) {
      dispatch({ type: UPDATE_STATUS, payload: id })
    } else {
      return false
    }

  }

  return (
    <button onClick={() => { taskDelete(props.id) }} className="btnCreate waves-effect waves-light btn-small"><i className="material-icons">check</i></button>
  )
}

export default ButtonCreate
