import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { init } from './actionsCreators'
import axios from 'axios'

function* getTodoList() {
  const res = yield axios.get('http://localhost:4000/todolist')
  if (res.data.code !== 1) {
    return
  }
  const list = res.data.list
  const todolist = list.map((item, index) => {
    return { id: index + 1, name: item }
  })
  yield put(init({ list: todolist }))
}

function* todoSaga() {
  yield takeEvery(GET_INIT_LIST, getTodoList)
}

export default todoSaga
