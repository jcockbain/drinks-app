import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { format, compareAsc } from 'date-fns';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';

const drinksIcons = {
  COFFEES: 'coffee-icon-background.png',
  COCKTAILS: 'cocktail-icon-background.png',
  BEERS: 'beer-icon-background.png',
  MILKSHAKES: 'milkshake-icon-background.png',
};

function App() {
  const [data, setData] = useState([]);

  const boxes = data.map((event) => (
    <Row>
      <Card key={event.id} className="main-box mx-auto my-3 w-20">
        <Card.Img fluid variant="top" src={`drinks-icons/${drinksIcons[event.type]}`} alt="drinks-icon" />
        <Card.Body>
          <Card.Title>{event.title}</Card.Title>
        </Card.Body>
      </Card>
    </Row>
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
      <Container>
        <Col md={12}>
          {boxes}
        </Col>
      </Container>
    </div>
  );
}

export default App;
