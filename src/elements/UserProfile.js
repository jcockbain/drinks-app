import React from 'react';
import PropTypes from 'prop-types';
import Media from 'react-bootstrap/Media';

const UserProfile = ({ name, avatarUrl }) => (
  <Media as="li" className="m-3 align-items-center">
    <img
      width={64}
      height={64}
      className="mr-3 rounded-circle"
      src={avatarUrl}
      alt={name}
    />
    <Media.Body>
      <p>{name}</p>
    </Media.Body>
  </Media>
);

UserProfile.defaultProps = {
  name: '',
  avatarUrl: '',
};

UserProfile.propTypes = {
  name: PropTypes.string,
  avatarUrl: PropTypes.string,
};

export default UserProfile;
