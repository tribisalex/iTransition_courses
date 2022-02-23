import React from 'react';
import {Card, Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useDispatch} from "react-redux";
import {setUser} from "../store/slices/userSlice";
import {FormAuth} from "../components/FormAuth";
import {HOMEPAGE_ROUTE} from "../utils/const";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
      dispatch(setUser({
        email: user.email,
        id: user.uid,
        token: user.accesstoken,
      }));
      navigate(HOMEPAGE_ROUTE);
    })
    .catch(() => alert('Invalid user'))
  }

  return (
    <Container className='d-flex justify-content-center align-items-center'
               style={{height: window.innerHeight - 65}}>
      <Card style={{width: 600}} className="p-5">
        <FormAuth
          title='Sign in'
          handleClick={handleLogin}
        />
        <Button variant={"outline-success"} className='mt-2'>Log in using Google</Button>
      </Card>
    </Container>
  );
};

export default LoginPage;