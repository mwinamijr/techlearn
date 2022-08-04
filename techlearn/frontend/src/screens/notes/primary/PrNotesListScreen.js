import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Card, Carousel, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NotesListScreen() {
    return (
        <div>
          <Card>
            <Card.Body>
                <Card.Title className="text-center">Notes List</Card.Title>
            </Card.Body>
            <Row>
              <Col>
                <Card className="m-2">
                  <Card.Header className="text-center">Classes</Card.Header>
                    <ListGroup variant="flush">
                    <ListGroup.Item>Darasa la Kwanza</ListGroup.Item>
                      <ListGroup.Item>Darasa la Pili</ListGroup.Item>
                      <ListGroup.Item>Darasa la Tatu</ListGroup.Item>
                      <ListGroup.Item>Darasa la Nne</ListGroup.Item>
                      <ListGroup.Item>Darasa la Tano</ListGroup.Item>
                      <ListGroup.Item>Darasa la Sita</ListGroup.Item>
                      <ListGroup.Item>Darasa la Saba</ListGroup.Item>
                    </ListGroup>
                </Card>
              </Col>
              <Col>
                <Card className="m-2">
                  <Card.Header className="text-center">Subjects</Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item>Hisabati</ListGroup.Item>
                      <ListGroup.Item>Sayansi</ListGroup.Item>
                      <ListGroup.Item>Uraia</ListGroup.Item>
                      <ListGroup.Item>Historia</ListGroup.Item>
                      <ListGroup.Item>Jiografia</ListGroup.Item>
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

export default NotesListScreen
