import { ADD, DELETE } from './actionTypes'

export const add = params => ({ type: ADD, payload: params }) 
export const del = params => ({ type: DELETE, payload: params }) 