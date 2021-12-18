import React, {useMemo, useCallback} from 'react'
import styled from 'styled-components'
import palette from '../styles/palette'
import {TodoType} from '../types/todo.d'
import TrashIcon from '../public/statics/svg/ic_trash.svg'
import CheckIcon from '../public/statics/svg/ic_check.svg'
import {checkTodoAPI} from '../lib/api/todo'
import Router from 'next/router'
//typeScript의 경우 javascript와는달리
// 키에 대한 타입까지도 정의해야함
// object.a 는 object[a]와 동일한데,
// typescript의 경우 대괄호표기법을 사용할때 해당 키에 대한 타입도 지정해줘야함
// object[a]에서 a가 무슨타입인지, object[a]가 무슨타입을 반환하는지
//두개를 명시해줘야함 대괄호 표기법을쓸거면
type ObjectIndexType = {
  [key: string]: number | undefined
}

interface IProps {
  todos: TodoType[]
}
const Container = styled.div`
  width: 100%;
  .todo-list-header {
    padding: 12px;
    border-bottom: 1px solid ${palette.gray};

    .todo-list-last-todo {
      font-size: 14px;
      span {
        margin-left: 8px;
      }
    }

    .todo-list-header-colors {
      display: flex;
      .todo-list-header-color-num {
        display: flex;
        margin-right: 8px;
        p {
          font-size: 14px;
          line-height: 16px;
          margin: 0;
          margin-left: 6px;
        }
        .todo-list-header-round-color {
          width: 16px;
          height: 16px;
          border-radius: 50%;
        }
      }
    }
  }
  .bg-blue {
    background-color: ${palette.blue};
  }
  .bg-green {
    background-color: ${palette.green};
  }
  .bg-navy {
    background-color: ${palette.navy};
  }
  .bg-orange {
    background-color: ${palette.orange};
  }
  .bg-red {
    background-color: ${palette.red};
  }
  .bg-yellow {
    background-color: ${palette.yellow};
  }

  .todo-list {
    .todo-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 52px;
      border-bottom: 1px solid ${palette.gray};
      .todo-left-side {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        .todo-color-block {
          width: 12px;
          height: 100%;
        }
        .checked-todo-text {
          color: ${palette.gray};
          text-decoration: line-through;
        }
        .todo-text {
          margin-left: 12px;
          font-size: 16px;
        }
      }
      .todo-right-side {
        display: flex;
        margin-right: 12px;
        svg {
          &:first-child {
            margin-right: 16px;
          }
        }
        .todo-trash-can {
          width: 26px;
          path {
            fill: ${palette.deep_red};
          }
        }
        .todo-check-mark {
          fill: ${palette.deep_green};
        }
        .todo-button {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 1px solid ${palette.gray};
          background-color: transparent;
          outline: none;
        }
      }
    }
  }
`
const TodoList: React.FC<IProps> = ({todos}) => {
  const [localTodos, setLocalTodos] = React.useState(todos)
  //방법1
  // const getTodoColorNums = useCallback(() => {
  //   let red = 0
  //   let orage = 0
  //   let yellow = 0
  //   let green = 0
  //   let blue = 0
  //   let navy = 0
  //   todos.forEach((todo) => {
  //     switch (todo.color) {
  //       case 'red':
  //         red += 1
  //         break
  //       case 'orage':
  //         orage += 1
  //         break
  //       case 'yellow':
  //         yellow += 1
  //         break
  //       case 'green':
  //         green += 1
  //         break
  //       case 'blue':
  //         blue += 1
  //         break
  //       case 'navy':
  //         navy += 1
  //         break
  //       default:
  //         break
  //     }
  //   })
  //   return {red, orage, yellow, green, blue, navy}
  // }, [todos])
  // const todoColorNums = useMemo(getTodoColorNums, [todos])
  const todoColorNums2 = useMemo(() => {
    const colors: ObjectIndexType = {}
    localTodos.forEach((todo) => {
      const value = colors[todo.color]
      if (!value) {
        //해당키의 값이 없었다면
        colors[`${todo.color}`] = 1
      } else {
        colors[`${todo.color}`] = value + 1
      }
    })
    return colors
  }, [localTodos])

  //Todo check 기능
  const checkTodo = async (id: number) => {
    try {
      await checkTodoAPI(id)
      console.log('체크하였습니다.')
      //체크를 한뒤 UI 를 업데이트 하는 방법 1(데이터 다시받기)
      //새로고침을 통하여 페이지전체를 아예 새로 받아오는것
      //Router.reload()

      //방법2. 페이지전체를 다시 새로불러오기보다는 ,  push 를 이용하여, push로 ('/')를 하면 페이지 전체를 다시 불러오지않고 데이터를 받을수있다.
      //전체 새로고침없이도 데이터를 새로받을수있음
      //push함수를 이용하여 setServerSideProps를 실행해서 데이터를 다시 받아오는방법으로하겠다.
      //근데 이방법도 불필요한 네트워크요청을 필요로하므로 개선이 필요한 방법임
      // Router.push('/')

      //방법3  , 위의 방법 1과 방법2는 변경시킨 데이터를, api를 통해서 새로받아와서 반영결과를 보여준다.
      //하지만 데이터를 새로불러오지 않고 뷰를 변화시키는 방법 3가 제일좋다.
      const newTodos = localTodos.map((todo) => {
        if (todo.id === id) {
          return {...todo, checked: !todo.checked}
        }
        return todo
      })
      setLocalTodos(newTodos)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Container>
      <div className='todo-list-header'>
        <p className='todo-list-last-todo'>
          남은 TODO <span>{localTodos.length}개</span>
        </p>
        <div className='todo-list-header-colors'>
          {/* Object.keys()를 이용하면 객체의 키값들을 배열로 얻을수가있다. */}
          {Object.keys(todoColorNums2).map((color, index) => (
            <div className='todo-list-header-color-num' key={index}>
              <div className={`todo-list-header-round-color bg-${color}`} />
              <p>{todoColorNums2[color]}개</p>
            </div>
          ))}
        </div>
      </div>

      <ul className='todo-list'>
        {localTodos.map((todo) => (
          <li className='todo-item' key={todo.id}>
            <div className='todo-left-side'>
              <div className={`todo-color-block bg-${todo.color}`} />
              <p
                className={`todo-text ${
                  todo.checked ? 'checked-todo-text' : ''
                }`}>
                {todo.text}
              </p>
            </div>
            <div className='todo-right-side'>
              {todo.checked && (
                <>
                  <TrashIcon className='todo-trash-can' onClick={() => {}} />
                  <CheckIcon
                    className='todo-check-mark'
                    onClick={() => {
                      checkTodo(todo.id)
                    }}
                  />
                </>
              )}
              {!todo.checked && (
                <button
                  type='button'
                  className='todo-button'
                  onClick={() => {}}
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default TodoList
