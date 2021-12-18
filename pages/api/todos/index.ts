import {NextApiRequest, NextApiResponse} from 'next'
import Data from '../../../lib/data'
import {TodoType} from '../../../types/todo'
var fs = require('fs')

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const todos = Data.todo.getList()
      res.statusCode = 200
      return res.send(todos)
      // const todoBuffer = fs.readFileSync('data/todos.json')
      // const todoString = todoBuffer.toString()
      // if (!todoString) {
      //   res.statusCode = 200
      //   res.send([])
      // }
      // const todos: TodoType[] = JSON.parse(todoString)
      // res.statusCode = 200
      // return res.send(todos)
    } catch (e) {
      console.log(e)
      res.statusCode = 500
      res.send(e)
    }
  }
}

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method === 'GET') {
//     try {
//       const todos = await new Promise<TodoType[]>((resolve, reject) => {
//         fs.readFile('data/todos.json', (err: Error, data: Buffer) => {
//           if (err) {
//             return reject(err.message)
//           }
//           const todosData = data.toString()
//           if (!todosData) {
//             return resolve([])
//           }
//           const todos = JSON.parse(data.toString())
//           return resolve(todos)
//         })
//       })
//       res.statusCode = 200
//       return res.send(todos)
//     } catch (e) {
//       console.log(e)
//       res.statusCode = 500
//       res.send(e)
//     }
//   }
// }
