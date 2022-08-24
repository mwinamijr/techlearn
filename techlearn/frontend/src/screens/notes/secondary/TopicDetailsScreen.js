import React, { Fragment, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Card, Carousel, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Loader from '../../../components/Loader'
import Message from '../../../components/Message'
import { getNoteDetails } from '../../../redux/actions/notesActions'


function TopicDetailsScreen() {
  const dispatch = useDispatch()
  const noteDetails = useSelector(store => store.noteDetails)
  const { error, loading,  note } = noteDetails

  useEffect(() => {
    dispatch(getNoteDetails())
  }, [dispatch])
  
  return (
    <div>
      <Link to="/notes/o-level/subjects/topics" className='btn btn-light my-3'>Home</Link>
      <Card className='m-2'>
        {loading ? <Loader />
          : error ? <Message variant='danger'>{error}</Message>
          : (
            <Fragment>
              <Card.Header>{note.topic}</Card.Header>
              <Card.Body>
                {note.notes.map(concept =>(
                  <Fragment>
                    <Card.Title>{concept.sub_topic}</Card.Title>
                    <Card.Text>{concept.explanation}</Card.Text>
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

export default TopicDetailsScreen