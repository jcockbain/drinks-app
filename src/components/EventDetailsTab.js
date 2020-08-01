import React from 'react';
import Card from 'react-bootstrap/Card';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import SimpleMap from '../elements/EventMap';

const EventDetailsTab = ({ event }) => {
  const eventDate = new Date(event.time);
  return (
    <Card.Body>
      <Card.Title>
        {event.title}
      </Card.Title>
      <Card.Subtitle className="text-muted">
        {event.time && `${format(eventDate, 'MM/dd/yyyy - kk:mm:ss')}`}
      </Card.Subtitle>
      <Card.Text>
        Location:
        {' '}
        {event.location && event.location.name}
      </Card.Text>
      {event.location && <SimpleMap location={event.location} />}
    </Card.Body>
  );
};

EventDetailsTab.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
    time: PropTypes.string,
    type: PropTypes.string,
    location: PropTypes.shape({
      name: PropTypes.string,
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }),
  }).isRequired,
};

export default EventDetailsTab;
