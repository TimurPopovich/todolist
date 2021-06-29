import { useSelector } from "react-redux";
import CardTask from "./CardTask.jsx";

function ListTask() {

  const list = useSelector(state => state.user.list);
  return (
    <>
      {
        list?.length ?
          <ul className="collection">
            {list.map(el => <CardTask task={el} key={el._id} />)}
          </ul> : <h3 className='textCenter'>Нет Задач</h3>
      }
    </>
  )
}

export default ListTask

