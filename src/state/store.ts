import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas/covid";
import { chartReducer } from "./reducers/chartReducer";
import { loadingAndErrorReducer } from "./reducers/loading&error";
import { modals } from "./reducers/modals";

const rootReducer = combineReducers({
  chartData: chartReducer,
  loadingAndError: loadingAndErrorReducer,
  modals: modals,
});

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
