import {createStore, applyMiddleware, combineReducers} from 'redux'
import {HYDRATE, createWrapper} from 'next-redux-wrapper'
import todo from './todo'

//1. 리듀서들을 모듈별로 관리하여 combineReducers를 사용하여 하나로 모은다.
const rootReducer = combineReducers({
  todo,
})

//2. 위에서 합쳐진 리듀서에 타입이 "__NEXT_REDUX_WRAPPER_HYDRATE__"인 리듀서를 추가한다.
//Hydrate는 서버에서 생성된 리덕스 스토어를 , 클라이언트에서 사용할수 있도록 전달해주는 역할을한다.
const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    }
    return nextState
  }
  return rootReducer(state, action)
}

//스토어의 타입
//3. 스토어의 타입을 루트 리듀서로부터 얻을 수 있습니다.
export type RootState = ReturnType<typeof rootReducer>

//미들웨어 적용을 위한 스토어 enhancer
//4. 리덕스에서 미들웨어는 액션이 디스패치되어 리듀서에서 처리하기 전에 사전에 지정된 작업들을 의미합니다.
//리덕스 데브툴 확장 프로그램을 사용하기 위해 미들웨어에 리덕스 데브툴을 사용하도록 하는 코드이다.
const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    const {composeWithDevTools} = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

//5. 리듀서와 미들웨어로 리덕스 스토어를 만들어 리턴하게된다.
//App컴포넌트에서 wrapper로 사용하기위해 next-redux-wrapper에서 createWrapper를 import 하여 wrapper를 만들었습니다.
//wrapper를 사용하기위해 App컴포넌트에서 사용하도록 하겠습니다.
const initStore = () => {
  return createStore(reducer, bindMiddleware([]))
}

export const wrapper = createWrapper(initStore)
