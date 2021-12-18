import {readFileSync, writeFileSync} from 'fs'
import {TodoType} from '../../types/todo'

// json파일 데이터인 todoList 데이터 불러오기
const getList = () => {
  const todosBuffer = readFileSync('data/todos.json')
  const todosString = todosBuffer.toString()
  if (!todosString) {
    return []
  }
  const todos: TodoType[] = JSON.parse(todosString)
  return todos
}

// json 리스트중 request로 넘어온 id 가 있는지 확인하기
const exist = ({id}: {id: number}) => {
  const todos = getList()
  //some함수는 일치하는 아이디가 리스트에 있다면 true를 반환하고 없다면 false를 반환한다.
  const todo = todos.some((todo) => todo.id === id)
  return todo
}

//json 파일리스트에 , 저장하기
const write = async (todos: TodoType[]) => {
  writeFileSync('data/todos.json', JSON.stringify(todos))
}
export default {getList, exist, write}
