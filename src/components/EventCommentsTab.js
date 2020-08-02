import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Profile from '../elements/UserProfile';
import Comment from '../elements/Comment';

const EventCommentsTab = ({ eventComments }) => (
  <Card.Body>
    <Card.Title>
      Comments
      <img className="pl-2" width={32} height={32} src="/drinks-icons/comment-yellow.png" alt="comment" />
    </Card.Title>
    <ListGroup>
      {eventComments && eventComments.map((comment) => (
        <Comment key={comment.timestamp} eventComment={comment} />
      ))}
    </ListGroup>
  </Card.Body>
);

EventCommentsTab.defaultProps = {
  eventComments: [],
};

EventCommentsTab.propTypes = {
  eventComments: PropTypes.arrayOf(PropTypes.shape({
    user: PropTypes.shape(Profile.propTypes),
    timestamp: PropTypes.string,
    message: PropTypes.string,
  })),
};

export default EventCommentsTab;
