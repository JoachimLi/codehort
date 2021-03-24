import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import ReduxThunk from 'redux-thunk';
// import logger from 'redux-logger';
import { BrowserRouter as Router } from 'react-router-dom';
// import { store } from './store/configureStore';
import './styles/index.sass';
import App from './containers/App/App';
// import userLessonReducer from './reducers/userLessons';

// const middleware = applyMiddleware(ReduxThunk, logger);

// const store: Store<any, any> = createStore(reducer, middleware);

ReactDOM.render(
  // <Provider store={store}>
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  // </Provider>,
  document.getElementById('root')
);
