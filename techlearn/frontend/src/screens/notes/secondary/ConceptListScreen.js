import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Card, Carousel, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Loader from '../../../components/Loader'
import Message from '../../../components/Message'
import { listConcepts } from '../../../redux/actions/notesActions'

function ConceptListScreen() {
  const dispatch = useDispatch()
  const conceptsList = useSelector(store => store.conceptsList)
  const { error, loading,  concepts } = conceptsList

  useEffect(() => {
    dispatch(listConcepts())
  }, [dispatch])
  
  return (
    <div>
        <Link to="/" className='btn btn-light my-3'>Home</Link>
      <Card>
        <Card.Body>
            <Card.Title className="text-center">Concepts List</Card.Title>
        </Card.Body>
        <Row>
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
              <Card.Header className="text-center">Concepts</Card.Header>
              {loading ? <Loader />
                :error ? <Message variant='danger'>{error}</Message>
                  :(
                  <ListGroup variant="flush">
                    {concepts.map(concept => (

                      <ListGroup.Item key={concept.id}><Link className='btn' to={`/notes/o-level/concepts/${concept.id}/`}>{concept.sub_topic}</Link></ListGroup.Item>
                    ))

                    }
                  </ListGroup>
                )
              }
            </Card>
          </Col>
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
        </Row>
      </Card>
    </div>
  )
}

export default ConceptListScreen