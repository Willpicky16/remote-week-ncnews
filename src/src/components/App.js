import React from 'react';

import NavBar from './NavBar';

const App = React.createClass({
  render: function () {
    return (
      <div>
        <NavBar />
          <div className="col-md-12">
            {this.props.children}
          </div>
      </div>
    );
  }
});

export default App;
