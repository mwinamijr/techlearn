import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'

function RegisterScreen() {
    
    const [first_name, setFirstName] = useState('')
    const [middle_name, setMiddleName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')
    /*
    const dispatch = useDispatch()
    const history = useHistory() 
    const redirect = '/'

    const userRegister = useSelector(state => state.userRegister)
    const { error, loading, userInfo } = userRegister
    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()

        if (password != confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            //dispatch(register(name, email, password))
            
        }

    }
    */
    return (
      <FormContainer>
        <h1>Sign In</h1>
        <Form>
          <Row>
            <Col>
              <Form.Group controlId='firstName'>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    required
                    type='name'
                    placeholder='Enter First Name'
                >
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId='middleName'>
                <Form.Label>Middle Name</Form.Label>
                <Form.Control
                    required
                    type='name'
                    placeholder='Enter middle name'
                >
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId='lastName'>
                <Form.Label>LastName</Form.Label>
                <Form.Control
                    required
                    type='name'
                    placeholder='Enter last name'
                >
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
                required
                type='email'
                placeholder='Enter Email'
            >
            </Form.Control>
          </Form.Group>

          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
                required
                type='password'
                placeholder='Enter Password'
            >
            </Form.Control>
          </Form.Group>

          <Form.Group controlId='passwordConfirm'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
                required
                type='password'
                placeholder='Confirm Password'
            >
            </Form.Control>
          </Form.Group>

          <Button type='submit' variant='primary'>
            Register
          </Button>

        </Form>

        <Row className='py-3'>
            <Col>
                Have an Account? <Link
                    to='/login'>
                    Sign In
                    </Link>
            </Col>
        </Row>
      </FormContainer >
    )
}

export default RegisterScreen
