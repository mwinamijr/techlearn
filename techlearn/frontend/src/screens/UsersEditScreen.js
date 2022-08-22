import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { InputGroup, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { getUserDetails, updateUser } from '../redux/actions/userActions'
import { USER_UPDATE_RESET } from '../redux/constants/userConstants'

function UserEditScreen() {

  const { id } = useParams()

  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userDetails = useSelector(state => state.userDetails)
  const { error, loading, user } = userDetails

  const userUpdate = useSelector(state => state.userUpdate)
  const { error: errorUpdate, loading: loadingUpdate, success: successUpdate } = userUpdate

  useEffect(() => {

      if (successUpdate) {
          dispatch({ type: USER_UPDATE_RESET })
          navigate('/admin/userlist')
      } else {

          if (!user.email || user.id !== Number(id)) {
              dispatch(getUserDetails(id))
          } else {
              setFirstName(user.firstName)
              setMiddleName(user.middleName)
              setLastName(user.lastName)
              setEmail(user.email)
              setIsAdmin(user.isAdmin)
          }
      }

  }, [user, id, successUpdate])

  const submitHandler = (e) => {
      e.preventDefault()
      dispatch(updateUser({ id: user.id, firstName, middleName, lastName, email, isAdmin }))
  }

  return (
    <div>
      <Link className='btn btn-light my-3' to='/admin/userlist'>
          Go Back
      </Link>

      <FormContainer>
        <h1>Edit User</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}

        {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
          : (
            <Form onSubmit={submitHandler}>
              
              <Form.Group controlId='firstName'>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type='name'
                  placeholder='Enter First name'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                >
                </Form.Control>
              </Form.Group>

              <Form.Group controlId='middleName'>
                <Form.Label>Middle Name</Form.Label>
                <Form.Control
                  type='name'
                  placeholder='Enter Middle name'
                  value={middleName}
                  onChange={(e) => setMiddleName(e.target.value)}
                >
                </Form.Control>
              </Form.Group>

              <Form.Group controlId='lastName'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type='name'
                  placeholder='Enter Last Name'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                >
                </Form.Control>
              </Form.Group>

              <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                >
                </Form.Control>
              </Form.Group>

              <Form.Group controlId='isadmin'>
                <Form.Check
                  type='checkbox'
                  label='Is Admin'
                  checked={isAdmin}
                  onChange={(e) => setIsAdmin(e.target.checked)}
                >
                </Form.Check>
              </Form.Group>

              <Button type='submit' variant='primary'>
                Update
              </Button>

            </Form>
          )}

      </FormContainer >
    </div>

  )
}

export default UserEditScreen