import { useSelector } from 'react-redux'
import Form from '../Form.jsx'
import ListTask from '../ListTask.jsx'

function Main() {

  const user = useSelector(state => state.user)

  return (
    <>
      {user.user !== null &&
        <div>
          <Form />
          <ListTask />
        </div>
      }
    </>
  )
}

export default Main
