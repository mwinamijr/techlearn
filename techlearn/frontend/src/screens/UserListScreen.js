import React, { useState, useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listUsers, deleteUser } from '../redux/actions/userActions'

function UserListScreen() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userList = useSelector(state => state.userList)
  const { loading, error, users } = userList

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const userDelete = useSelector(state => state.userDelete)
  const { success: successDelete } = userDelete


  useEffect(() => {
      if (userInfo && userInfo.isAdmin) {
          dispatch(listUsers())
      } else {
          navigate('/login')
      }

  }, [dispatch, successDelete, userInfo])


  const deleteHandler = (id) => {

      if (window.confirm('Are you sure you want to delete this user?')) {
          dispatch(deleteUser(id))
      }
  }

  return (
    <div>
      <h1>Users</h1>
      {loading
        ? (<Loader />)
        : error
            ? (<Message variant='danger'>{error}</Message>)
            : (
              <Table striped bordered hover responsive className='table-sm'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>FIRST NAME</th>
                    <th>LAST NAME</th>
                    <th>EMAIL</th>
                    <th>ADMIN</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {users.map(user => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.first_name}</td>
                      <td>{user.last_name}</td>
                      <td>{user.email}</td>
                      <td>{user.isAdmin ? (
                        <i className='bi bi-check' style={{ color: 'green' }}>yes</i>
                      ) : (
                        <i className='bi bi-check' style={{ color: 'red' }}>No</i>
                      )}
                      </td>

                      <td>
                        <LinkContainer to={`/admin/user/${user.id}/edit`}>
                          <Button variant='light' className='btn'>
                            <i className='fas fa-edit'></i>
                          </Button>
                        </LinkContainer>

                        <Button variant='danger' className='btn' onClick={() => deleteHandler(user.id)}>
                          <i className='fas fa-trash'></i>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
    </div>
  )
}

export default UserListScreen
