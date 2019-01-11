import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from "./Reducers/Reducers";
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware,loggerMiddleware))
);

export default store;
