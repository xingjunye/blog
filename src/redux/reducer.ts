/**
 * 这个文件接受两个reducer 一个是sagaReducer 一个是thunkReducer
 */

import { combineReducers } from 'redux';
import sagaReducer from './saga/reducers/index';

// 接受一个对象 对象里面是小的reducer
const rootReducer = combineReducers({
  ...sagaReducer
});

export default rootReducer;