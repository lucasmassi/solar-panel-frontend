import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { SubmitButton, NewRegister, Text } from './styles';

import { signUpRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  state: Yup.string()
    .min(2, 'Min characteres is 2. Exemple: CA')
    .max(2, 'Max characteres is 2. Exemple: CA')
    .required('State is required'),
  email: Yup.string()
    .email('Insert an valid e-mail')
    .required('E-mail is required'),
  password: Yup.string()
    .min(6, 'Min characteres is 6')
    .required('Password is required'),
});

export default function Register() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, state, password }) {
    dispatch(signUpRequest(name, email, state, password));
  }

  return (
    <>
      <Text>Create your personal account</Text>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Insert your full name" />
        <Input name="email" type="text" placeholder="Insert your email" />
        <Input
          name="state"
          type="text"
          placeholder="Insert your state(ex: CA, FL)"
        />
        <Input
          name="password"
          type="password"
          placeholder="Insert your password"
        />

        <SubmitButton type="submit">SIGN UP</SubmitButton>

        <NewRegister>
          You have account?
            <Link to="/"> I have account </Link>
        </NewRegister>
      </Form>
    </>
  );

}
