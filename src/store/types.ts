export interface PartType {
    id: number
    name: string
    qty: number
}

export interface AppState {
    partsList: PartType[]
}

export const ADD_PART_TO_LIST = 'ADD_PART_TO_LIST';
export const DELETE_PART_FROM_LIST = 'DELETE_PART_FROM_LIST';
export const EDIT_PART_FROM_LIST = 'EDIT_PART_FROM_LIST';
export const INFO_PART_FROM_LIST = 'INFO_PART_FROM_LIST';

interface AddPartAction {
  type: typeof ADD_PART_TO_LIST
}
interface DeletePartAction {
  type: typeof DELETE_PART_FROM_LIST
  payload: { id: number }
}
interface EditPartAction {
  type: typeof EDIT_PART_FROM_LIST
  payload: { id: number }
}
interface InfoPartAction {
  type: typeof INFO_PART_FROM_LIST
  payload: { id: number }
}
export type PartsActionTypes = AddPartAction | DeletePartAction | EditPartAction | InfoPartAction;
