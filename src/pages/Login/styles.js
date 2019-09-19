import styled from 'styled-components';
import { darken } from 'polished';

export const LoginArea = styled.div`
  width: 500px;
  height: 700px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -250px;
  margin-left: -250px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: transparent;
  border-radius: 4px;
  padding: 20px;
`;

export const LoginForm = styled.form.attrs(props => props.error)`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 3px solid rgb(25, 24, 31);
    padding: 15px 15px;
    border-radius: 5px;
    font-weight: bold;
    font-size: 16px;
    margin-top: 10px;
    width: 100%;
    justify-content: center;
    background: rgb(25, 24, 31);
    color: #575561;

    &:focus {
      border-color: #6756b8;
      transition: 0.4s;
    }
  }
`;

export const LoginLogo = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 80px;
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading ? true : false,
}))`
  background: #6756b8;
  margin-top: 20px;
  color: rgb(25, 24, 31);
  border: 0;
  padding: 16px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-weight: bold;
  color: #fff;
  transition: 0.5s;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:hover {
    border-color: #21212b;
    background: ${darken(0.03, '#6756b8')};
    transition: 0.5s;
  }
`;

export const RegisterButton = styled.button.attrs(props => ({
  type: 'button',
}))`
  background: #6a6a80;
  margin-top: 20px;
  color: #fff;
  border: 0;
  padding: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-weight: bold;
`;

export const NewRegister = styled.div`
  color: #6a6a80;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
  display: flex;

  a {
    font-weight: bold;
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    margin-left: 10px;
    transition: 0.5s;
  }

  a:hover {
    color: #6756b8;
    transition: 0.5s;
  }
`;
