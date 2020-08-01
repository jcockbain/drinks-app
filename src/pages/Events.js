import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {
  useParams,
} from 'react-router-dom';

import Header from '../components/PageHeader';
import EventSummaryContainer from '../containers/EventSummaryContainer';
import EventTabs from '../containers/EventTabsContainer';

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
        <EventTabs event={eventData} />
      </EventSummaryContainer>
    </div>

  );
}

export default Events;
