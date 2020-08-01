import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';

import Header from './components/PageHeader';
import EventSummaryContainer from './containers/EventSummaryContainer';
import EventSummaryCard from './elements/EventSummaryCard';
import EventSearch from './elements/EventSearch';

function Home() {
  const [data, setData] = useState([]);
  const [searchString, setSearchString] = useState('');

  const boxes = data.map((event) => (
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
    <div className="App">
      <Header />
      <EventSummaryContainer>
        <Row>
          <EventSearch submitSearch={setSearchString} />
        </Row>
        <Row>
          {boxes}
        </Row>
      </EventSummaryContainer>
    </div>

  );
}

export default Home;
