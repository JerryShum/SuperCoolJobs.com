import React, { useState, useEffect } from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';

const cardStyles = {
  width: '100%',
  backgroundColor: 'grey',
};

const imgStyles = {
  border: '5px solid grey',
};

const cardBodyStyles = {
  display: 'flex',
  flexDirection: 'column',
};

function Posting() {
  const [jobPostings, setPostings] = useState([]);

  const fetchData = async () => {

    const response = await fetch('http://jeremymark.ca:3001/job_postings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers needed for your API
      },
      // Add any data needed for the POST request in the body
      body: JSON.stringify({
        // Include any parameters your API requires
      }),
    });
    const result = await response.json();
    setPostings(result.data);
  };

  // Use useEffect to make the API call when the component mounts
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <Row xs={1} md={2} lg={3} xl={4} className="g-4">
      {jobPostings.map((jobPostings, index) => (
        <Col key={index} className="p-3 d-flex">
          <Card className='w-100 bg-body-secondary'>

            <Card.Img variant="top" src={jobPostings.picture} className='overflow-hidden' style={{ height: '15rem', objectFit: 'cover' }} />
            <Card.Body className='d-flex flex-column h-100 '>
              <Card.Title>{jobPostings.job_posting_title}</Card.Title>
              <Card.Text style={{ fontSize: '1rem' }} className='flex-grow-1'>
                Company: {jobPostings.company_name}<br /><br />

                Description: {jobPostings.job_posting_description}
              </Card.Text>
              <Card.Text style={{ fontSize: '1rem' }} className='flex-grow-1'>
                Salary: {jobPostings.salary}<br />
                Status: {jobPostings.job_posting_status}<br />
                Type: {jobPostings.job_posting_type}<br />
                Frequency: {jobPostings.job_posting_frequency}
              </Card.Text>
              <div className="mt-auto flex-shrink-1">
                <Button variant="primary" className="w-50">Check Profile</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Posting;
