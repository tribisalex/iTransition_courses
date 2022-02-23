import React from 'react';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {useDispatch} from "react-redux";
import {setUser} from "../store/slices/userSlice";
import {FormAuth} from "../components/FormAuth";
import {Card, Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";
import {HOMEPAGE_ROUTE} from "../utils/const";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
      dispatch(setUser({
        email: user.email,
        id: user.uid,
        token: user.accesstoken,
      }));
      navigate(HOMEPAGE_ROUTE);
    })
    .catch(console.error)
  }

  return (
    <Container className='d-flex justify-content-center align-items-center'
               style={{height: window.innerHeight - 65}}>
      <Card style={{width: 600}} className="p-5">
        <FormAuth
          title='Register'
          handleClick={handleRegister}
        />
        <Button variant={"outline-success"} className='mt-2'>Log in using Google</Button>
      </Card>
    </Container>
  );
};
export default RegistrationPage;