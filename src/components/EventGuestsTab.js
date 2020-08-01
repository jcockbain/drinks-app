import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';
import Profile from '../elements/UserProfile';

const EventGuestsTab = ({ eventGuests, creator }) => (
  <Card.Body>
    <Card.Title className="mb-3">
      Event Guests
    </Card.Title>
    <Card.Subtitle className="mb-3">
      Creator
    </Card.Subtitle>
    {creator && <Profile avatarUrl={creator.avatarUrl} name={creator.name} />}
    <Card.Subtitle className="mb-3">
      Guests
    </Card.Subtitle>
    <ListGroup horizontal>
      {eventGuests && eventGuests.map((guest) => (
        <Profile avatarUrl={guest.avatarUrl} name={guest.name} />
      ))}
    </ListGroup>
  </Card.Body>
);

EventGuestsTab.defaultProps = {
  eventGuests: [],
};

EventGuestsTab.propTypes = {
  eventGuests: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
  })),
  creator: PropTypes.shape({
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
  }).isRequired,
};

export default EventGuestsTab;
