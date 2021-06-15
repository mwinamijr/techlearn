import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Card, Carousel } from 'react-bootstrap'
import SearchBox from '../components/SearchBox'


function HomeScreen({ history }) {
  
    return (
        <div>
          <Row>
            <SearchBox />
          </Row>
          <Row>
            <Col>Notes</Col>
            <Col>Questions</Col>
            <Col>Exams</Col>
          </Row>
        </div>
    )
}

export default HomeScreen
