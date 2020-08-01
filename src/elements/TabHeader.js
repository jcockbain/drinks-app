import React from 'react';
import Badge from 'react-bootstrap/Badge';
import PropTypes from 'prop-types';

const TabHeader = ({ title, value }) => (
  <div>
    {title}
    <Badge className="ml-1" variant="light">{value}</Badge>
  </div>
);

TabHeader.defaultProps = {
  value: null,
};

TabHeader.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number,
};

export default TabHeader;
