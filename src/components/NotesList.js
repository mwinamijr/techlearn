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
                  <Card.Header className="text-center">Primary</Card.Header>
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
                  <Card.Header className="text-center">O-level</Card.Header>
                    <ListGroup variant="flush">
                    <ListGroup.Item>Form One</ListGroup.Item>
                      <ListGroup.Item>Form Two</ListGroup.Item>
                      <ListGroup.Item>Form Three</ListGroup.Item>
                      <ListGroup.Item>Form Four</ListGroup.Item>
                        <ListGroup.Item>Form Five</ListGroup.Item>
                      <ListGroup.Item>Form Six</ListGroup.Item>
                    </ListGroup>
                </Card>
              </Col>
              
            </Row>
          </Card>
        </div>
    )
}

export default NotesListScreen
