import React, { Fragment, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Card, Carousel, ListGroup } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import Loader from '../../../components/Loader'
import Message from '../../../components/Message'
import { getNoteDetails } from '../../../redux/actions/notesActions'


function ConceptDetailsScreen() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const noteDetails = useSelector(state => state.noteDetails)
  const { error, loading,  note } = noteDetails

  useEffect(() => {
    dispatch(getNoteDetails(id))
  }, [dispatch, id,])

  return (
    <div>
      <Link to="/notes/o-level/concepts" className='btn btn-light my-3'>Concepts</Link>
      <Card className='m-2'>
        {loading ? <Loader />
          : error ? <Message variant='danger'>{error}</Message>
          : (
            <Fragment>
              <Card.Header>{concept.topic}</Card.Header>
              <Card.Body>
                <Card.Title>{concept.sub_topic}</Card.Title>
                <Card.Text>{concept.explanation}</Card.Text>
                {(concept.additional_explanations).map(ae =>(
                  <Fragment>
                    <Card.Title>{ae.name}</Card.Title>
                    <Card.Text>{ae.explanation}</Card.Text>
                  </Fragment>
                )
                )}
              </Card.Body>
            </Fragment>
          )
        }
      </Card>
    </div>
  )
}

export default ConceptDetailsScreen