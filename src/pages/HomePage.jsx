import React from 'react';
import {useAuth} from "../hooks/use-auth";
import {useDispatch} from "react-redux";
import {LOGIN_ROUTE} from "../utils/const";
import {useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {removeUser} from "../store/slices/userSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {isAuth, email} = useAuth();

  return (
    <div>
      <h1>Welcome</h1>
      <Button onClick={() => dispatch(removeUser())}>
        Log out from {email}
      </Button>
    </div>
  )
};

export default HomePage;