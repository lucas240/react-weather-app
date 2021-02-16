import React, {useState} from 'react';
import {Row, Col, Form, FormGroup, Input, Button} from 'reactstrap';
import {API_KEY, API_BASE_URL} from '../apis/config';

const CitySelector = () => {
  const [city, setCity] = useState('');
  const [results, setResults] = useState(null);

  const onSearch = async () => {
    await fetch(
      `${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((results) => setResults(results));
      //DELETE console
      console.log(results)
  };

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
    </>
  );
};

export default CitySelector;