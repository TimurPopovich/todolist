export const thunkNewUser = (newUser) => {
  return (dispatch) => {
    fetch('/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ newUser })
    })
      .then(res => res.json())
      .then(data => dispatch({ type: 'INIT_USER', payload: data }))
      .then(data => localStorage.setItem('token', data.payload.token))
      .catch((error) => console.log(error))
  }
}
