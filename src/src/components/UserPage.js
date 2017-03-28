import React from 'react';
import {connect} from 'react-redux';
import {fetchAllUsers} from '../actions/actions';
import {ProgressBar, Alert} from 'react-bootstrap';
import UserCard from './UserCard';

const UserPage = React.createClass({
  componentDidMount () {
    this.props.fetchUsers();
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
          <a href="/"><button className="btn btn-primary">Home</button></a>
        </div>
        <div className="user-list">
          {this.renderUsers()}
        </div>
      </div>
    );
  },
  renderUsers () {
    return this.props.users.map((user, key) => {
      return <UserCard key={key} username={user.username} name={user.name} img={user.avatar_url}/>;
    });
  }
});

function mapStateToProps (state) {
  return {
    articles: state.users.users,
    loading: state.users.loading,
    error: state.users.error
  };
}

function mapDispatchToProps (dispatch) {
  return {
    fetchUsers: () => {
      dispatch(fetchAllUsers());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
