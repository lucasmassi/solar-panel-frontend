import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { MdToys } from 'react-icons/md';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';

import { SubmitButton, NewRegister, Text } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insert an valid e-mail')
    .required('E-mail is required'),
  password: Yup.string().required('Password is required'),
});

export default function Login() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <Text>Sign in Orbita portal</Text>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input type="text" name="email" placeholder="E-mail" id="" />
        <Input type="password" name="password" placeholder="Password" id="" />
        <SubmitButton type="submit">
          {loading ? <MdToys size={28} /> : 'SIGN IN'}
        </SubmitButton>

        <NewRegister>
          You do not have register?
          <Link to="/register"> Create an account </Link>
        </NewRegister>
      </Form>
    </>
  );
}
