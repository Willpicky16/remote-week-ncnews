import * as types from './types';
import {ROOT} from '../../config';
import axios from 'axios';

export function fetchAllArticles () {
  return function (dispatch) {
    dispatch(fetchArticlesRequest());
    axios
      .get(`${ROOT}/articles`)
      .then((res) => {
        dispatch(fetchArticlesSuccess(res.data.articles));
      })
      .catch((err) => {
        dispatch(fetchArticlesError(err));
      });
  };
}

export function fetchArticlesRequest () {
  return {
    type: types.FETCH_ARTICLES_REQUEST
  };
}

export function fetchArticlesSuccess (articles) {
  return {
    type: types.FETCH_ARTICLES_SUCCESS,
    data: articles
  };
}

export function fetchArticlesError (err) {
  return {
    type: types.FETCH_ARTICLES_ERROR,
    data: err
  };
}

export function fetchAllComments (article_id) {
  return function (dispatch) {
    dispatch(fetchCommentsRequest());
    axios
      .get(`${ROOT}/articles/${article_id}/comments`)
      .then((res) => {
        dispatch(fetchCommentsSuccess(res.data.comments));
      })
      .catch((err) => {
        dispatch(fetchCommentsError(err));
      });
  };
}

export function fetchCommentsRequest () {
  return {
    type: types.FETCH_COMMENTS_REQUEST
  };
}

export function fetchCommentsSuccess (comments) {
  return {
    type: types.FETCH_COMMENTS_SUCCESS,
    data: comments
  };
}

export function fetchCommentsError (err) {
  return {
    type: types.FETCH_COMMENTS_ERROR,
    data: err
  };
}

export function fetchAllUsers () {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get(`${ROOT}/users`)
      .then((res) => {
        dispatch(fetchUsersSuccess(res.data.users));
      })
      .catch((err) => {
        dispatch(fetchUsersError(err));
      });
  };
}

export function fetchUsersRequest () {
  return {
    type: types.FETCH_USERS_REQUEST
  };
}

export function fetchUsersSuccess (users) {
  return {
    type: types.FETCH_USERS_SUCCESS,
    data: users
  };
}

export function fetchUsersError (err) {
  return {
    type: types.FETCH_USERS_ERROR,
    data: err
  };
}

export function voteArticle (article_id, vote) {
  return function (dispatch) {
    dispatch(voteArticleRequest());
    axios
      .put(`${ROOT}/articles/${article_id}?vote=${vote}`)
      .then(res => {
        dispatch(voteArticleSuccess(res.data))
      })
      .catch(err => {
        dispatch(voteArticleError(err))
      });
  }
}

export function voteArticleRequest () {
  return {
    type: types.VOTE_ARTICLE_REQUEST
  };
}

export function voteArticleSuccess (data) {
  return {
    type: types.VOTE_ARTICLE_SUCCESS,
    data: data
  };
}

export function voteArticleError (err) {
  return {
    type: types.VOTE_ARTICLE_ERROR,
    data: err
  };
}
