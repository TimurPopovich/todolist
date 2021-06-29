export const thunkAuth = () => {
  return (dispatch) => {

    fetch('/auth', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    }).then(data => data.json())
      .then(data => {
        if (data.message) {
          throw new Error(data.message)
        } else return data
      })
      .then((data) => dispatch({ type: 'INIT_USER', payload: { user: data.user, token: data.token } }))
      .then((data) => localStorage.setItem('token', data.payload.token))
      .catch(error => {
        console.log(error);
        localStorage.removeItem('token')
      })
  }

}
