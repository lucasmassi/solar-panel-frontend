import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { SubmitButton, NewRegister } from './styles';

export default class Login extends Component {
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
          <Input type="text" name="email" placeholder="E-mail" id="" />
          <Input type="password" name="password" placeholder="Password" id="" />
          <SubmitButton type="submit" loading={loading}>
            {loading ? <span>LOADING...</span> : <span>SIGN IN</span>}
          </SubmitButton>

          <NewRegister>
            <span>You do not have register? </span>
            <Link to="/register"> Create registry </Link>
          </NewRegister>
        </Form>
      </>
    );
  }
}
