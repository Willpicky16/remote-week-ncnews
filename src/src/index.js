import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import '../public/bootstrap/css/bootstrap.css';

import App from './components/App';
import ArticleList from './components/ArticleList';
import TopicArticlePage from './components/TopicArticlePage';
import ArticlePage from './components/ArticlePage';
import UserPage from './components/UserPage';
import reducer from './reducer/index.reducer';

const store = createStore(reducer, applyMiddleware(thunk, createLogger()));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={ArticleList}/>
        <Route path='/articles/:article_id' component={ArticlePage}/>
        <Route path='/topics/:topic/articles' component={TopicArticlePage}/>
        <Route path='/users' component={UserPage}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
