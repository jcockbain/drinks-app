import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from 'react-bootstrap/tabs';
import Tab from 'react-bootstrap/tab';
import { Card } from 'react-bootstrap';
import EventDetails from '../components/EventDetailsTab';
import EventGuests from '../components/EventGuestsTab';
import EventComments from '../components/EventCommentsTab';
import Profile from '../elements/UserProfile';
import TabHeader from '../elements/TabHeader';

const EventTabsContainer = ({ event }) => {
  const [key, setKey] = useState('details');
  const numberOfGuests = event.guests ? event.guests.length : 0;
  const numberOfComments = event.comments ? event.comments.length : 0;

  const cardBody = {
    details: <EventDetails event={event} />,
    guests: <EventGuests creator={event.creator} eventGuests={event.guests} />,
    comments: <EventComments eventComments={event.comments} />,
  };
  return (
    <Card>
      <Card.Header>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="details" title={<TabHeader title="Details" />} />
          <Tab eventKey="guests" title={<TabHeader title="Guests" value={numberOfGuests} />} />
          <Tab eventKey="comments" title={<TabHeader title="Comments" value={numberOfComments} />} />
        </Tabs>
      </Card.Header>
      {cardBody[key]}
    </Card>

  );
};

EventTabsContainer.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
    time: PropTypes.string,
    type: PropTypes.string,
    guests: PropTypes.arrayOf(PropTypes.shape(Profile.propTypes)),
    creator: PropTypes.shape(Profile.propTypes),
    location: PropTypes.shape({
      name: PropTypes.string,
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }),
    comments: PropTypes.arrayOf(PropTypes.shape({
      user: PropTypes.shape(Profile.propTypes),
      timeStamp: PropTypes.string,
      message: PropTypes.string,
    })),
  }).isRequired,
};

export default EventTabsContainer;
