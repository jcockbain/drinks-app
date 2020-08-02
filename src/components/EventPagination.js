import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import PropTypes from 'prop-types';

const EventPagination = ({ numberOfEvents, pageNumber, setPageNumber }) => {
  const paginationItems = [];
  for (let number = 1; (3 * (number - 1)) / numberOfEvents < 1; number += 1) {
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
};

export default EventPagination;
