import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';
import drinksIcons from '../utils/drinksIcons';

const EventSummaryCard = ({ event }) => (
  <Col md={4}>
    <Card className="m-4">
      <Card.Img variant="top" src={`/drinks-icons/${drinksIcons[event.type]}`} alt="drinks-icon" />
      <Card.Body>
        <Card.Title>
          <Link to={`/events/${event.id}`}>
            {event.title}
          </Link>
        </Card.Title>
        <Card.Subtitle className="text-muted">
          {event.time && format(new Date(event.time), 'MM/dd/yyyy')}
        </Card.Subtitle>
        <Card.Text>
          {event.location && event.location.name}
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
