import { combineReducers } from "redux";
import reducerUser from "./reducerUser";

const reducer = combineReducers({
  user: reducerUser,
})

export default reducer
