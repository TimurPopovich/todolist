export const thunkLogin = (logInfo) => {
  return (dispatch) => {
    fetch(`/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({ logInfo }),
    })
      .then((res) => res.json())
      .then(data => {
        if (data.message) {
          throw new Error(data.message)
        } else return data
      })
      .then((data) => dispatch({ type: 'INIT_USER', payload: data }))
      .then((data) => localStorage.setItem('token', data.payload.token))
      .catch((error) => alert(`${error.message}`));
  };
};
