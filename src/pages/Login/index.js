import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/orbita_logo.png';
//import { formatPrice } from '../../util/format';

import { LoginArea, LoginForm, SubmitButton, NewRegister, LoginLogo } from './styles';

export default class Login extends Component {
  state = {
    newUser: [],
    loading: 0,
  };

  render() {
    const { loading } = this.state;

    return (
      <>
        <LoginLogo>
          <img width="300px" src={Logo} alt="Logo orbita" />
        </LoginLogo>
        <LoginArea>
          <LoginForm>
            <div>
              <input type="text" name="" placeholder="E-mail" id="" />
              <input type="password" name="" id="" />
              <SubmitButton type="submit" loading={loading}>
                {loading ? <span>CARREGANDO...</span> : <span>ENTRAR</span>}
              </SubmitButton>

              <NewRegister>
                <span>Nao tem registro? </span>
                <Link> Criar registro </Link>
              </NewRegister>
            </div>
          </LoginForm>
        </LoginArea>
      </>
    );
  }
}
