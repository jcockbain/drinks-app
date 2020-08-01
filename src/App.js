import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { format } from 'date-fns';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.scss';
import drinksIcons from './utils/drinksIcons';

function App() {
  const [data, setData] = useState([]);

  const boxes = data.map((event) => (
    <Col md={4}>
      <Card key={event.id} className="m-3">
        <Card.Img fluid variant="top" src={`drinks-icons/${drinksIcons[event.type]}`} alt="drinks-icon" />
        <Card.Body>
          <Card.Title>{event.title}</Card.Title>
          <Card.Subtitle className="text-muted">
            {format(new Date(event.time), 'MM/dd/yyyy')}
          </Card.Subtitle>
          <Card.Text>
            {event.location.name}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
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
      <header className="App-header"><img className="header-image" src="drinks-icons/drinks-text.png" alt="drinks-text" /></header>
      <Container className="max-auto my-3">
        <Row>
          {boxes}
        </Row>
      </Container>
    </div>
  );
}

export default App;
