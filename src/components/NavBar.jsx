import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";
import logo from 'assets/img/Logo.png'
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {useAuth} from "../hooks/use-auth";
import {LOGIN_ROUTE} from "../utils/const";
import {removeUser} from "../store/slices/userSlice";
import {useDispatch} from "react-redux";

const NavBar = () => {
  const {isAuth} = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(removeUser())
    navigate(LOGIN_ROUTE)
  }

  return (
    <Navbar bg='primary' variant='dark'>
      <Container className='d-flex justify-content-center align-items-center'>
        <Nav className='d-flex justify-content-between align-items-center' style={{width: 1100}}>
          <img src={logo} style={{width: 60}} alt={logo}/>
          <ButtonGroup aria-label="Basic example">
            {isAuth
              ?<Button variant={'outline-light'} onClick={signOut}>Sign out</Button>
              :<Button variant={'outline-light'} onClick={() => navigate(LOGIN_ROUTE)}>Sign in</Button>
            }
          </ButtonGroup>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;