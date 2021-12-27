import React from 'react'
import {NextPage} from 'next'
import TodoList from '../components/TodoList'
import {TodoType} from '../types/todo'
import {getTodosAPI} from '../lib/api/todo'
import {wrapper} from '../store'
import {todoActions} from '../store/todo'

const app: NextPage = () => {
  return <TodoList />
}
export default app

//GetServerSideprops는 request가 들어오는순간 서버측에서 실행되므로
//클라이언트측 브라우저콘솔에 찍히는게 아니라, 서버쪽 커멘트창에 console이 찍힌다.
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    try {
      const {data} = await getTodosAPI()
      store.dispatch(todoActions.setTodo(data))
      return {props: {}}
    } catch (e) {
      console.log(e)
      return {props: {}}
    }
  }
)
