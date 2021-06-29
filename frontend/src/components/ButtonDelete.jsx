import { useDispatch, useSelector } from 'react-redux'
import { DELETE_TASK } from '../redux/actionTypes/actionTypes';

function ButtonDelete(props) {

  const dispatch = useDispatch();

  const user = useSelector(state => state.user)

  const taskDelete = async (id) => {

    const response = await fetch('http://localhost:4000/list', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        idUser: user._id,
      })
    })

    if (response.ok) {
      dispatch({ type: DELETE_TASK, payload: id })
    } else {
      return false
    }

  }

  return (
    <button onClick={() => { taskDelete(props.id) }} type='submit' className="btnDelete waves-effect waves-light btn-small"><i className="material-icons">delete</i></button>
  )
}

export default ButtonDelete
