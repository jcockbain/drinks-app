import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Header from './components/Header';
import EventSummaryContainer from './containers/EventSummaryContainer';
import './App.scss';

import EventSummaryCard from './elements/EventSummaryCard';

function App() {
  const [data, setData] = useState([]);

  const boxes = data.map((event) => (
    <EventSummaryCard key={event.id} event={event} />
  ));

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        'https://mock-api.drinks.test.siliconrhino.io/events',
      );
      setData(result.data);
    }
    fetchData();
  }, []);

  return (
    <div className="App m-auto">
      <Header />
      <EventSummaryContainer>
        <Row>
          {boxes}
        </Row>
      </EventSummaryContainer>
    </div>
  );
}

export default App;
