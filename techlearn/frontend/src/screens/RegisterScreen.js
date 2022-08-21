import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col, InputGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { register} from '../redux/actions/userActions'

function RegisterScreen() {
    
    const [firstName, setFirstName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isTeacher, setIsTeacher] = useState(false)
    const [message, setMessage] = useState('')
   
    const dispatch = useDispatch()
    const navigate = useNavigate() 
    const redirect = '/'

    const userRegister = useSelector(store => store.userRegister)
    const { error, loading, userInfo } = userRegister
    useEffect(() => {
        if (userInfo) {
            navigate(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()

        if (password != confirmPassword) {
            setMessage('Passwords do not match')
        } else {
          dispatch(register(firstName, middleName, lastName, email, password, isTeacher))
            
        }

    }

    return (
      <FormContainer>
        <h1>Sign Up</h1>
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <InputGroup>
            <InputGroup.Text>Full Names</InputGroup.Text>
            <Form.Control
            required
            type='name'
            placeholder='First Name'
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)}
            />
            <Form.Control
            type='name'
            placeholder='Middle Name'
            value={middleName}
            onChange={(e)=>setMiddleName(e.target.value)}
            />
            <Form.Control
            required
            type='name'
            placeholder='Last Name'
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)}
            />
          </InputGroup>

          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              required
              type='email'
              placeholder='Enter Email'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            >
            </Form.Control>
          </Form.Group>

          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
                required
                type='password'
                placeholder='Enter Password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            >
            </Form.Control>
          </Form.Group>

          <Form.Group controlId='passwordConfirm'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
                required
                type='password'
                placeholder='Confirm Password'
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
            >
            </Form.Control>
          </Form.Group>

          <Form.Group controlId='userType'>
            <Form.Label className='text-muted'>Please check this box if you are teacher</Form.Label>
            <Form.Check
              type='checkbox'
              label='teacher' 
              value={isTeacher}
              onChange={(e)=>setIsTeacher(e.target.checked)}
            />
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
