import { ADD, DELETE, SET_NAME } from './actionTypes'

export const setName = params => ({type: SET_NAME, payload: params})
export const add = params => ({ type: ADD, payload: params }) 
export const del = params => ({ type: DELETE, payload: params }) 