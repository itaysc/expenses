import { combineReducers } from 'redux';
import UserData from './reducer_userData';
import graphData from './reducer_graphData';
const rootReducer = combineReducers({
    userData: UserData,
    graphData:graphData
});

export default rootReducer;
