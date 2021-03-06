import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../components/PageHeader';
import EventSummaryContainer from '../containers/EventSummaryContainer';
import EventSummaryCard from '../elements/EventSummaryCard';
import EventSearch from '../elements/EventSearch';
import EventPagination from '../components/EventPagination';
import { eventsOnHomePage } from '../utils/constants';

function Home() {
  const [events, setEvents] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchString, setSearchString] = useState('');
  const [numberOfEvents, setNumberOfEvents] = useState(0);

  // get the total number of events
  useEffect(() => {
    async function fetchData() {
      const apiUrl = `https://mock-api.drinks.test.siliconrhino.io/events?search=${searchString}`;
      const result = await axios(
        apiUrl,
      );
      if (result.data) {
        setNumberOfEvents(result.data.length);
      }
    }
    fetchData();
  }, [searchString]);

  // get the specific events for the page
  useEffect(() => {
    async function fetchData() {
      const apiUrl = searchString
        ? `https://mock-api.drinks.test.siliconrhino.io/events?search=${searchString}&pageSize=${eventsOnHomePage}&pageNumber=${pageNumber}`
        : `https://mock-api.drinks.test.siliconrhino.io/events?pageSize=${eventsOnHomePage}&page=${pageNumber}`;

      const result = await axios(
        apiUrl,
      );
      setEvents(result.data);
    }
    fetchData();
  }, [searchString, pageNumber]);

  const eventsCards = events
    .sort((a, b) => {
      const dateA = new Date(a.time);
      const dateB = new Date(b.time);
      return dateA - dateB;
    })
    .map((event) => (
      <EventSummaryCard key={event.id} event={event} />
    ));

  const updateSearchString = (string) => {
    setSearchString(string);
    setPageNumber(1);
  };

  return (
    <div>
      <Header />
      <EventSummaryContainer>
        <Row className="px-3">
          <Col md={4}>
            <EventSearch submitSearch={updateSearchString} />
          </Col>
          <Col className="mt-md-0 mt-2" md={{ span: 4, offset: 4 }}>
            <EventPagination
              numberOfEvents={numberOfEvents}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              eventsPerPage={eventsOnHomePage}
            />
          </Col>
        </Row>
        <Row>
          {eventsCards}
        </Row>
      </EventSummaryContainer>
    </div>

  );
}

export default Home;
