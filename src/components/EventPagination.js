import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import PropTypes from 'prop-types';

const EventPagination = ({
  numberOfEvents, pageNumber, eventsPerPage, setPageNumber,
}) => {
  const paginationItems = [];
  for (let number = 1; (eventsPerPage * (number - 1)) / numberOfEvents < 1; number += 1) {
    paginationItems.push(
      <Pagination.Item
        key={number}
        active={number === pageNumber}
        onClick={() => setPageNumber(number)}
      >
        {number}
      </Pagination.Item>,
    );
  }
  return (
    <Pagination>
      {paginationItems}
    </Pagination>
  );
};

EventPagination.propTypes = {
  numberOfEvents: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired,
  setPageNumber: PropTypes.func.isRequired,
  eventsPerPage: PropTypes.number.isRequired,
};

export default EventPagination;
