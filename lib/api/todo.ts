import axios from './index'
import {TodoType} from '../../types/todo'
//networkAPI 관련임

//투두 리스트 불러오기 API
export const getTodosAPI = () => axios.get<TodoType[]>('/api/todos')

//투두 체크상태 변경하기  checked 상태를 true => false로, false => true로 바꿈
export const checkTodoAPI = (id: number) => axios.patch(`api/todos/${id}`)

//투두 리스트에 추가하기
interface AddTodoAPIBody {
  text: string
  color: TodoType['color']
}
export const addTodoAPI = (body: AddTodoAPIBody) => {
  axios.post('/api/todos', body)
}

//투두 삭제하기 API
export const deleteTodoAPI = (id: number) => axios.delete(`/api/todos/${id}`)
