import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Profile from './views/Profile.jsx'

function PrivateRoute() {

  const user = useSelector(state => state.user)

  return (
    <Route render={({ location }) =>
      user.user !== null ? (
        <Profile />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: location }
          }}
        />
      )
    }
    />
  )
}
export default PrivateRoute
