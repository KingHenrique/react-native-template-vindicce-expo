import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import ReduxPromise from 'redux-promise'
import thunk from 'redux-thunk'
import reducers from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [ReduxPromise, thunk, sagaMiddleware]
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
const store = createStoreWithMiddleware(reducers)

sagaMiddleware.run(rootSaga)

export default store

// With redux persist

// import { createStore, applyMiddleware } from 'redux'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import reducers from './reducers'

// const persistConfig = {
//   key: '@Name',
//   storage,
//   blacklist: ['events', 'createEvent']
// }

// const middlewares = []

// const persistedReducer = persistReducer(persistConfig, reducers)
// const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
// const store = createStoreWithMiddleware(persistedReducer)
// let persistor = persistStore(store)

// export { store, persistor }
