import React, {useState} from 'react';
import {Row, Col, Form, FormGroup, Input, Button} from 'reactstrap';
import {API_KEY, API_BASE_URL} from '../apis/config';
import WeatherCard from './WeatherCard';

const CitySelector = () => {
  const [city, setCity] = useState('');
  const [results, setResults] = useState(null);

  const onSearch = async () => {
    await fetch(
      `${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((res) => setResults(res.list))
  };
  ///////////////////// TODO: fix form submit, error when pressing enter
  return (
    <>
        <Row>
            <Col>
                <h1>Search your city</h1>
            </Col>
        </Row>
        <Form onSubmit={onSearch}>
            <FormGroup row>
                <Col xs={4} className="text-center">
                    <Col sm={{ size: 10, offset: 1 }}>
                        <Input 
                            name="search" 
                            id="search" 
                            placeholder="Enter city" 
                            // update city value with the user's input
                            onChange={(event) => setCity(event.target.value)}
                            // value will be the currently selected city
                            value={city}
                        />
                    </Col>
                </Col>
                <Button onClick={onSearch}>Submit</Button>
            </FormGroup>
        </Form>
        <Row>
            {results && results.slice(0,5).map(item => {
                return (
                <Col>
                    <WeatherCard
                    dt={item.dt * 1000}
                    temp_min={item.main.temp_min}
                    temp_max={item.main.temp_max}
                    main={item.weather[0].main}
                    icon={item.weather[0].icon}
                    />
                </Col>
                );
            })}
        </Row>
    </>
  );
};

export default CitySelector;