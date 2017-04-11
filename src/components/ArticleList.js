import React from 'react';
import {connect} from 'react-redux';
import {fetchAllArticles} from '../actions/actions';
import {ProgressBar, Alert} from 'react-bootstrap';
import ArticleCard from './ArticleCard';

const ArticleList = React.createClass({
  componentDidMount () {
    this.props.fetchArticles();
  },
  render () {
    if (this.props.loading) return <ProgressBar active now={100}/>;
    if (this.props.error) return (
      <Alert bsStyle="danger">
          <h4>Oh snap! You got an error!</h4>
          <p>Sadly you got an error! Please try again later :(</p>
      </Alert>
    );
    return (
      <div>
        <div className="jumbotron col-md-12">
          <h1>All Articles</h1>
          <a href="/topics/football/articles"><button className="btn btn-primary">Football</button></a>
          <a href="/topics/cooking/articles"><button className="btn btn-info">Cooking</button></a>
          <a href="/topics/coding/articles"><button className="btn btn-success">Coding</button></a>
        </div>
        <div id="ArticleList">
          {this.renderArticles()}
        </div>
      </div>
    );
  },
  renderArticles () {
    return this.props.articles.map((article, key) => {
      return <ArticleCard key={key} article_id={article._id} title={article.title} votes={article.votes} topic={article.belongs_to} author={article.created_by} comments={article.comment_count}/>;
    });
  }
});

function mapStateToProps (state) {
  return {
    articles: state.articles.articles,
    loading: state.articles.loading,
    error: state.articles.error
  };
}

function mapDispatchToProps (dispatch) {
  return {
    fetchArticles: () => {
      dispatch(fetchAllArticles());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
