import { ADD_TASK, DELETE_TASK, EDIT_TASK, INIT_USER, LOGOUT, UPDATE_STATUS } from "../actionTypes/actionTypes";

const initialState = {
  user: null
}

export default function reducerUser(state = initialState, action) {
  switch (action.type) {
    case INIT_USER:
      return action.payload.user
    case LOGOUT:
      localStorage.removeItem('token');
      return { user: null };
    case ADD_TASK:
      return { ...state, list: [...state.list, action.payload] }
    case DELETE_TASK:
      const copyState = { ...state, list: [...state.list] };
      const findElementArr = copyState.list.filter(el => el._id === action.payload)
      const index = copyState.list.indexOf(findElementArr[0])
      copyState.list.splice(index, 1)
      return copyState;
    case UPDATE_STATUS:
      const copyState2 = { ...state, list: [...state.list] };
      const findElementArr2 = copyState2.list.filter(el => el._id === action.payload)
      const index2 = copyState2.list.indexOf(findElementArr2[0])
      if (copyState2.list[index2].status) {
        copyState2.list[index2].status = false;
      } else {
        copyState2.list[index2].status = true;
      }
      return copyState2;
    case EDIT_TASK:
      const copyState3 = { ...state, list: [...state.list] };
      const findElementArr3 = copyState3.list.filter(el => el._id === action.payload.id)
      const index3 = copyState3.list.indexOf(findElementArr3[0])
      copyState3.list[index3].title = action.payload.title;
      return copyState3
    default:
      return state
  }
}
