import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { EDIT_TASK } from "../redux/actionTypes/actionTypes";
import ButtonCreate from "./ButtonCreate.jsx";
import ButtonDelete from "./ButtonDelete.jsx";

function CardTask({ task }) {

  const [isEdit, setIsEdit] = useState(false)
  const [value, setValue] = useState(task.title)

  const dispatch = useDispatch()

  const inpVal = useRef();

  const redactTask = async (event) => {
    event.preventDefault()

    if (event.target.editTask.value === '') {

      setIsEdit(false)
      return false

    } else {

      const response = await fetch('/listOne', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: event.target.editTask.value,
          id: task._id,
        })
      })

      if (response.ok) {
        dispatch({ type: EDIT_TASK, payload: { id: task._id, title: event.target.editTask.value } })
        setIsEdit(false)
      } else {
        setIsEdit(false)
      }

    }

  }

  const inputHandler = () => setValue(inpVal.current.value)

  return (
    <li className="collection-item ">
      <ButtonCreate id={task._id} />

      {
        isEdit
          ? <form onSubmit={redactTask}><input value={value} ref={inpVal} onChange={() => { inputHandler() }} name='editTask' placeholder='Введите новое название'></input></form>
          : <p onClick={() => { setIsEdit(true) }} className={task.status ? 'startImg red accent-1' : ''}>{task.title}</p>
      }

      <ButtonDelete id={task._id} />
    </li>
  )
}

export default CardTask
