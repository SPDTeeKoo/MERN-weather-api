import { Form, Container, Card, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
// import { useGetCurrentWeatherDataQuery } from '../slices/weatherApiSlice';
import { useDispatch, useSelector } from 'react-redux';

const Weather = () => {
  const [location, setLocation] = useState('');
  //   const { data, isFetching } = useGetCurrentWeatherDataQuery('london,uk');
  //   if (isFetching) console.log(data);

  // const weatherSelector = useSelector((state) => state.weatherApi);
  // const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(location);
  };

  return (
    <div className=" py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">Weatheria App</h1>
          <Form onSubmit={submitHandler}>
            <Form.Group className="my-2" controlId="email">
              <Form.Label>Enter the location to get weather details</Form.Label>
              <Form.Control
                type="location"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary" className="mt-3">
              Submit
            </Button>
          </Form>
        </Card>
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">Weather Info</h1>
        </Card>
      </Container>
    </div>
  );
};

export default Weather;
