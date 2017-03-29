import React from 'react';
import {connect} from 'react-redux';
import {fetchAllArticles} from '../actions/actions';
import {ProgressBar, Alert} from 'react-bootstrap';
import SeparateArticle from './SeparateArticle';
import CommentSection from './CommentSection';

const SeparateArticlePage = React.createClass({
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
        <div className="">
          <a href="/"><button className="btn btn-primary">Back</button></a>
        </div>
        <div className="ArticleList">
          {this.renderArticles()}
          <CommentSection articleId={this.props.params.article_id}/>
        </div>
      </div>
    );
  },
  renderArticles () {
    return this.props.articles.map((article, key) => {
      if (article._id === this.props.params.article_id) {
        return <SeparateArticle key={key} article_id={article._id} title={article.title} text={article.body} votes={article.votes} topic={article.belongs_to} author={article.created_by} comments={article.comments}/>;
      }
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

export default connect(mapStateToProps, mapDispatchToProps)(SeparateArticlePage);
