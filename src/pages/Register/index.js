import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { SubmitButton, NewRegister } from './styles';

export default class Register extends Component {
  state = {
    loading: 0,
  };

  handleSubmit = async data => {
    console.tron.log(data);
  };

  render() {
    const { loading } = this.state;

    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Input name="name" type="text" placeholder="Insert your full name" />
          <Input name="email" type="text" placeholder="Insert your email" />
          <Input
            name="password"
            type="password"
            placeholder="Insert your password"
          />

          <SubmitButton type="submit" loading={loading}>
            {loading ? <span>LOADING...</span> : <span>SIGN UP</span>}
          </SubmitButton>

          <NewRegister>
            <span>You have account? </span>
            <Link to="/"> I have account </Link>
          </NewRegister>
        </Form>
      </>
    );
  }
}
