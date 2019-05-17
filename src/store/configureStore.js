import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import businesses from './reducers/businessesReducer'
import staff from './reducers/staffReducer'
import enumTypes from './reducers/enumTypesReducer'

export default function configureStore () {  
    const rootReducer = combineReducers({
        businesses,
        staff,
        enumTypes
    });
  
    return createStore(
      rootReducer,
      composeWithDevTools(
        applyMiddleware(thunk)
      )
    );
  }