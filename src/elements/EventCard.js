import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import SimpleMap from './SimpleMap';

const EventSummaryCard = ({ event }) => {
  const eventDate = new Date(event.time);
  return (
    <Col>
      <Card className="m-3">
        <Card.Body>
          <Card.Title>
            {event.title}
          </Card.Title>
          <Card.Subtitle className="text-muted">
            {event.time && `${format(eventDate, 'kk:mm:ss')} - ${format(eventDate, 'MM/dd/yyyy')}`}
          </Card.Subtitle>
          {event.location && <SimpleMap location={event.location} />}
          <Card.Text>
            {event.location && event.location.name}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

EventSummaryCard.propTypes = {
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

export default EventSummaryCard;
