import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

export const Text = styled.div`
  color: #fff;
  font-size: 16px;
`;

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      flex: 1;
      border: 3px solid #eee;
      padding: 15px 15px;
      border-radius: 5px;
      font-size: 16px;
      margin-top: 10px;
      width: 100%;
      justify-content: center;
      background: #eee;
      color: #575561;
      margin-top: 10px;

      &:focus {
        border-color: ${darken(0.02, '#575561')};
        transition: 0.4s;
      }

      &::placeholder {
        color: #575561;
      }
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255,255,255,0.2);
      margin: 20px 0 10px;
    }

    span {
      color: #ed311c;
      align-self: flex-start;
      margin: 0 0 10px;
    }
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LogoutButton = styled.button`
  background: #21212b;
  margin-top: 20px;
  border: 0;
  padding: 16px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #fff;
  transition: 0.5s;
  font-size: 16px;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:hover {
    border-color: #21212b;
    background: ${darken(0.08, '#21212b')};
    transition: 0.5s;
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading ? true : false,
}))`
  background: #ffa6ea;
  margin-top: 20px;
  color: #21212b;
  border: 0;
  padding: 16px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  transition: 0.5s;
  font-size: 16px;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:hover {
    border-color: #ffa6ea;
    background: ${darken(0.03, '#ffa6ea')};
    transition: 0.5s;
  }

  svg {
    animation: ${rotate} 1s linear infinite;
  }
`;
