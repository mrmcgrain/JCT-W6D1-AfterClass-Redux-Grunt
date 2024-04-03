
import { createStore } from 'redux';
import stopwatchReducer from './stopWatchReducer';

const store = createStore(stopwatchReducer);

export default store;
