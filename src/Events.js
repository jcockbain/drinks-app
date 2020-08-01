import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {
  useParams,
} from 'react-router-dom';

import Header from './components/Header';
import EventSummaryContainer from './containers/EventSummaryContainer';
import EventCard from './elements/EventCard';

function Events() {
  const [eventData, setEventData] = useState({});
  const { eventId } = useParams();

  useEffect(() => {
    async function fetchData() {
      const apiUrl = `https://mock-api.drinks.test.siliconrhino.io/events/${eventId}`;

      const result = await axios(
        apiUrl,
      );
      setEventData(result.data);
    }
    fetchData();
  }, []);

  return (

    <div className="App">
      <Header />
      <EventSummaryContainer>
        <EventCard event={eventData} />
      </EventSummaryContainer>
    </div>

  );
}

export default Events;
