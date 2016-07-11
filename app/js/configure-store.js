import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

const loggerMiddleware = createLogger();

const createStoreWith = compose(applyMiddleware(thunkMiddleware, loggerMiddleware))(createStore);

const configureStore = (initialState) => {
  return createStoreWith(rootReducer, initialState);
};

export default configureStore;
