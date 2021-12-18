import React from 'react'
import {GetServerSideProps, NextPage} from 'next'
import TodoList from '../components/TodoList'
import {TodoType} from '../types/todo'
import {getTodosAPI} from '../lib/api/todo'

interface Iprops {
  todos: TodoType[]
}
const app: NextPage<Iprops> = ({todos}) => {
  console.log(todos)
  return <TodoList todos={todos} />
}
export default app

//GetServerSideprops는 request가 들어오는순간 서버측에서 실행되므로
//클라이언트측 브라우저콘솔에 찍히는게 아니라, 서버쪽 커멘트창에 console이 찍힌다.
export const getServerSideProps: GetServerSideProps = async () => {
  console.log(123123)
  try {
    const {data} = await getTodosAPI()

    return {props: {todos: data}}
  } catch (e) {
    console.log(e)
    return {props: {todos: []}}
  }
}
