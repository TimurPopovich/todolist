import { applyMiddleware, createStore } from "redux";
import reducerRoot from "./reducers/reducerRoot";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'

const store = createStore(reducerRoot, composeWithDevTools(applyMiddleware(thunk)))

export default store
