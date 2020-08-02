import React from 'react';
import { format } from 'date-fns';
import Media from 'react-bootstrap/Media';
import PropTypes from 'prop-types';

const Comment = ({ eventComment }) => (
  <Media className="m-2 p-2 border rounded" as="li">
    <img
      width={64}
      height={64}
      className="mr-3 rounded-circle"
      src={eventComment.user.avatarUrl}
      alt={eventComment.user.name}
    />
    <Media.Body>
      <h5>{eventComment.user.name}</h5>
      <p>
        {eventComment.message}
      </p>
      <small className="text-muted">
        {format(new Date(eventComment.timestamp), 'dd/MM/yyyy - kk:mm:ss')}
      </small>
    </Media.Body>
  </Media>
);

Comment.propTypes = {
  eventComment: PropTypes.shape({
    message: PropTypes.string,
    user: PropTypes.shape({
      name: PropTypes.string,
      avatarUrl: PropTypes.string,
    }),
    timestamp: PropTypes.string,
  }).isRequired,
};

export default Comment;
