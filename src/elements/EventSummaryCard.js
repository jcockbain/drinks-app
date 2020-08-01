import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import drinksIcons from '../utils/drinksIcons';

const EventSummaryCard = ({ event }) => (
  <Col md={3}>
    <Card className="m-3">
      <Card.Img variant="top" src={`drinks-icons/${drinksIcons[event.type]}`} alt="drinks-icon" />
      <Card.Body>
        <Card.Title>{event.title}</Card.Title>
        <Card.Subtitle className="text-muted">
          {format(new Date(event.time), 'MM/dd/yyyy')}
        </Card.Subtitle>
        <Card.Text>
          {event.location.name}
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
);

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
