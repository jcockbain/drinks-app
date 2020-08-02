import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';
import Profile from '../elements/UserProfile';

const EventGuestsTab = ({ eventGuests, creator }) => (
  <Card.Body>
    <Card.Title>
      Events Guests
    </Card.Title>
    <Card.Subtitle className="my-3">
      Creator
      <img className="pl-2" width={32} src="/drinks-icons/crown-icon-yellow.png" alt="crown" />
    </Card.Subtitle>
    {creator && <Profile avatarUrl={creator.avatarUrl} name={creator.name} />}
    <Card.Subtitle className="my-3">
      Guests
    </Card.Subtitle>
    <ListGroup>
      {eventGuests && eventGuests.map((guest) => (
        <Profile key={guest.name} avatarUrl={guest.avatarUrl} name={guest.name} />
      ))}
    </ListGroup>
  </Card.Body>
);

EventGuestsTab.defaultProps = {
  eventGuests: [],
  creator: {},
};

EventGuestsTab.propTypes = {
  eventGuests: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
  })),
  creator: PropTypes.shape({
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
  }),
};

export default EventGuestsTab;
