import { ADD, DELETE, SET_NAME, INIT_LIST, GET_INIT_LIST } from './actionTypes'

export const setName = (params) => ({ type: SET_NAME, payload: params })
export const add = (params) => ({ type: ADD, payload: params })
export const del = (params) => ({ type: DELETE, payload: params })
export const init = (params) => ({ type: INIT_LIST, payload: params })
export const getInitList = (params) => ({
  type: GET_INIT_LIST,
  payload: params,
})
