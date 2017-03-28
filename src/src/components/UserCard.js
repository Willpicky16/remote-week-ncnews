import React from 'react';

const ArticleCard = function (props) {
  return (
    <div className="media">
      <div className="media-left">
        <img className="media-object" src={props.img} alt="User Profile Picture"/>
      </div>
      <div className="media-body">
        <h4 className="media-heading">{props.username}</h4>
        {props.name}
      </div>
    </div>
  );
};

export default ArticleCard;
