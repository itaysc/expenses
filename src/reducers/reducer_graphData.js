import types from '../types';

export default (state = [], action) =>{
  switch(action.type){
    case types.GET_OVERALL_EXPENSES: return action.payload;
    case types.GET_GRAPH_DATA: return action.payload;
  }
  return state;
}
