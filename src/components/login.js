import React from 'react'
import {Button, Container, Form} from 'react-bootstrap'
import { useRef } from 'react'
import {v4 as uuidV4} from 'uuid'

export default function Login({onIDsubmit}) {
  const idRef=useRef()
  const handleSubmit=(e)=>{
    e.preventDefault()
    onIDsubmit(idRef.current.value)
  }
  const createNewId=()=>{
    onIDsubmit(uuidV4())
  }
  return (
   <Container className=' align-items-center d-flex' style={{height:'100vh'}}>
    
    <Form onSubmit={handleSubmit} className='w-100 '>
      <Form.Group className='mb-3'>
        <Form.Label>Enter Your Id:</Form.Label>
        <Form.Control type='text' ref={idRef} required />
      </Form.Group>
      <Button type='submit' className="me-2" >Login</Button>
      <Button onClick={createNewId} variant='secondary'>Create A New Id</Button>
    </Form>
    </Container>
  )
}
