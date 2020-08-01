import React from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import PropTypes from 'prop-types';

const provider = (x, y, z) => {
  const s = String.fromCharCode(97 + ((x + y + z) % 3));
  return `https://${s}.tile.openstreetmap.org/${z}/${x}/${y}.png`;
};

const EventMap = ({ location }) => {
  const eventLocation = [location.latitude, location.longitude];
  return (
    <div className="m-3">
      <Map center={eventLocation} zoom={12} defaultWidth={600} height={400} provider={provider}>
        <Marker anchor={eventLocation} payload={1} />
      </Map>
    </div>
  );
};

EventMap.propTypes = {
  location: PropTypes.shape({
    name: PropTypes.string,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
  }).isRequired,
};

export default EventMap;
