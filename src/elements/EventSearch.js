import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';

const EventSearch = ({ submitSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    submitSearch(searchTerm);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Col sm="auto">
          <Form.Control aria-describedby="drinksSearch" type="text" placeholder="Search Event..." onChange={(e) => setSearchTerm(e.target.value)} />
        </Col>
        <Col sm="auto">
          <Button type="submit" className="my-sm-0 my-2">Search</Button>
        </Col>
      </Form.Row>
      <Form.Row>
        <Col sm="auto">
          <Form.Text id="drinksSearch">
            Search for an event by its title, or the name of its venue
          </Form.Text>
        </Col>
      </Form.Row>
    </Form>
  );
};

EventSearch.propTypes = {
  submitSearch: PropTypes.func.isRequired,
};

export default EventSearch;
