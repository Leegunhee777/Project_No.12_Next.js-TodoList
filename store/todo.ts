import {TodoType} from '../types/todo'

export const SET_TODO_LIST = 'todo/SET_TODO_LIST'

export const setTodo = (payload: TodoType[]) => {
  return {
    type: SET_TODO_LIST,
    payload,
  }
}

export const todoActions = {setTodo}

interface TodoReduxState {
  todos: TodoType[]
}

//초기상태
const initialState: TodoReduxState = {
  todos: [],
}

//항상 리듀서를 export default 해야합니다.
export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_TODO_LIST:
      const newState = {...state, todos: action.payload}
      return newState
    default:
      return state
  }
}
