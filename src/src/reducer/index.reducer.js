import {combineReducers} from 'redux';

import articles from './articles.reducer';
import comments from './comments.reducer';
import users from './users.reducer';

export default combineReducers({
	articles,
	comments,
	users
});
