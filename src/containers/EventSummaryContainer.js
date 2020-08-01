import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';

const EventSummaryContainer = ({ children }) => (
  <Container className="mx-auto my-3">
    {children}
  </Container>
);

EventSummaryContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default EventSummaryContainer;
