import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Profile from '../elements/UserProfile';
import Comment from '../elements/Comment';

const EventCommentsTab = ({ eventComments }) => (
  <Card.Body>
    <ListGroup>
      {eventComments && eventComments.map((comment) => (
        <Comment eventComment={comment} />
      ))}
    </ListGroup>
  </Card.Body>
);

EventCommentsTab.propTypes = {
  eventComments: PropTypes.arrayOf(PropTypes.shape({
    user: PropTypes.shape(Profile.propTypes),
    timeStamp: PropTypes.string,
    message: PropTypes.string,
  })).isRequired,
};

export default EventCommentsTab;
