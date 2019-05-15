import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import business from './reducers/business'
import staff from './reducers/staff'

export default function configureStore () {  
    const rootReducer = combineReducers({
        business,
        staff
    });
  
    return createStore(
      rootReducer,
      composeWithDevTools(
        applyMiddleware(thunk)
      )
    );
  }