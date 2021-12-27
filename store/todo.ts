import {createSlice, PayloadAction, Dispatch} from '@reduxjs/toolkit'
import {TodoType} from '../types/todo'

interface TodoReduxState {
  todos: TodoType[]
}

//초기상태
const initialState: TodoReduxState = {
  todos: [],
}

const todo = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodo(state, action: PayloadAction<TodoType[]>) {
      state.todos = action.payload
    },
    clear(state, action: PayloadAction) {
      state.todos = []
    },
  },
})
//todo.actions는 액션 생성사들을 모아놓은것이다, ex) setTodo
export const todoActions = {...todo.actions}

//thunk로 사용도가능함
// const getContacts = () => {
//   return async (dispatch: Dispatch) => {
//     dispatch(todo.actions.setTodo())
//     try {
//       const response = await axios.get('/api/chat/contacts')
//       dispatch(todo.actions.getContactsSuccess(response.data.contacts))
//     } catch (error) {
//       dispatch(todo.actions.hasError(error))
//     }
//   }
// }
// export {getContacts}
const clearFunc = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(todo.actions.clear())
    } catch (error) {
      console.log(error)
    }
  }
}
export {clearFunc}

export default todo
