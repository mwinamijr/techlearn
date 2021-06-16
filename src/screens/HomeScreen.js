import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Card, Button, ListGroup } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import SearchBox from '../components/SearchBox'


function HomeScreen({ history }) {
  
    return (
        <div>
          <Row className="text-center m-3 mb-5">
            <Card className="mt-3 p-3">
              <SearchBox />
            </Card>
          </Row>
          <Row className="text-center">

            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>
                  <Link to="/notes/notes-list">Notes</Link>
                  </Card.Title>
                  
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <Link to='notes/primary/notes-list'><Button variant="outline-secondary">Primary school</Button>{' '}</Link>
                        </ListGroup.Item>
                      <ListGroup.Item><Link to="/notes/sec/notes-list"><Button variant="outline-secondary">O-Level</Button>{' '}</Link></ListGroup.Item>
                      <ListGroup.Item><Link to="/notes/sec/notes-list"><Button variant="outline-secondary">A-Level</Button>{' '}</Link></ListGroup.Item>
                    </ListGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>
                  <Link to="/notes-list">Questions</Link>
                  </Card.Title>
                  
                    <ListGroup variant="flush">
                      <ListGroup.Item>Primary School</ListGroup.Item>
                      <ListGroup.Item>O-Level</ListGroup.Item>
                      <ListGroup.Item>A-Level</ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
              </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>
                <Link to="/notes-list">Exams</Link>
                </Card.Title>
                
                  <ListGroup variant="flush">
                    <ListGroup.Item>Primary School</ListGroup.Item>
                    <ListGroup.Item>O-Level</ListGroup.Item>
                    <ListGroup.Item>A-Level</ListGroup.Item>
                  </ListGroup>

                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
    )
}

export default HomeScreen
