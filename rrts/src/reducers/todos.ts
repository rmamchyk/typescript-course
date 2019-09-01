import { Todo, FetchTodosAction } from '../actions';
import { ActionTypes } from './../actions/types';

export const todosReducer = (
  state: Todo[] = [], 
  action: FetchTodosAction
): Todo[] => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    default:
      return state;
  }
};