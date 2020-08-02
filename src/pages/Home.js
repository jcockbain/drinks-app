import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Header from '../components/PageHeader';
import EventSummaryContainer from '../containers/EventSummaryContainer';
import EventSummaryCard from '../elements/EventSummaryCard';
import EventSearch from '../elements/EventSearch';

function Home() {
  const [data, setData] = useState([]);
  const [searchString, setSearchString] = useState('');

  const events = data
    .sort((a, b) => {
      const dateA = new Date(a.time);
      const dateB = new Date(b.time);
      return dateA - dateB;
    })
    .map((event) => (
      <EventSummaryCard key={event.id} event={event} />
    ));

  useEffect(() => {
    async function fetchData() {
      const apiUrl = searchString
        ? `https://mock-api.drinks.test.siliconrhino.io/events?search=${searchString}`
        : 'https://mock-api.drinks.test.siliconrhino.io/events';

      const result = await axios(
        apiUrl,
      );
      setData(result.data);
    }
    fetchData();
  }, [searchString]);

  return (
    <div>
      <Header />
      <EventSummaryContainer>
        <Row>
          <EventSearch submitSearch={setSearchString} />
        </Row>
        <Row>
          {events}
        </Row>
      </EventSummaryContainer>
    </div>

  );
}

export default Home;
