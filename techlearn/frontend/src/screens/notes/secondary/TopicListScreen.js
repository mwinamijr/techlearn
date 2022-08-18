import React from 'react'

function TopicListScreen() {
  return (
    <div>
      <Link to="/" className='btn btn-light my-3'>Home</Link>
      <Card>
        <Card.Body>
            <Card.Title className="text-center">Notes List</Card.Title>
        </Card.Body>
        <Row>
          <Col>
            <Card className="m-2">
              <Card.Header className="text-center">Classes</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>Form One</ListGroup.Item>
                  <ListGroup.Item>Form Two</ListGroup.Item>
                  <ListGroup.Item>Form Three</ListGroup.Item>
                  <ListGroup.Item>Form Four</ListGroup.Item>
                </ListGroup>
            </Card>
          </Col>
          <Col>
            <Card className="m-2">
              <Card.Header className="text-center">Subjects</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>Basic Mathematics</ListGroup.Item>
                  <ListGroup.Item>Biology</ListGroup.Item>
                  <ListGroup.Item>Chemistry</ListGroup.Item>
                  <ListGroup.Item>Physics</ListGroup.Item>
                  <ListGroup.Item>History</ListGroup.Item>
                  <ListGroup.Item>English</ListGroup.Item>
                  <ListGroup.Item>Kiswahili</ListGroup.Item>
                </ListGroup>
            </Card>
          </Col>
          <Col>
            <Card className="m-2">
              <Card.Header className="text-center">Classes</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  )
}

export default TopicListScreen