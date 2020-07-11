import { ADD, DELETE, SET_NAME, INIT_LIST } from './actionTypes'

export const setName = (params) => ({ type: SET_NAME, payload: params })
export const add = (params) => ({ type: ADD, payload: params })
export const del = (params) => ({ type: DELETE, payload: params })
export const init = (params) => ({ type: INIT_LIST, payload: params })
// export const getTodoList = () => (dispatch) => {
//   axios
//     .get('http://localhost:4000/todolist')
//     .then((res) => {
//       console.log('请求成功', res)
//       if (res.data.code !== 1) {
//         return
//       }
//       const list = res.data.list
//       const todolist = list.map((item, index) => {
//         return { id: index + 1, name: item }
//       })
//       dispatch(
//         init({
//           list: todolist,
//         })
//       )
//     })
//     .catch((error) => {
//       console.log('报错')
//     })
// }
