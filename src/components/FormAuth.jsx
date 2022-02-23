import React, {useState} from 'react';
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const FormAuth = ({title, handleClick}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <div>
        <h2 className='m-auto'>{title}</h2>
        <Form className='d-flex flex-column'>
          <Form.Control
            className='mt-2'
            placeholder='Enter your email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Control
            className='mt-2'
            placeholder='Enter your password'
            value={pass}
            onChange={e => setPass(e.target.value)}
            type='password'
          />
          <Button variant={"outline-success"} className='mt-2' onClick={() => handleClick(email, pass)}>{title}</Button>
        </Form>
    </div>
  );
};

export {FormAuth};