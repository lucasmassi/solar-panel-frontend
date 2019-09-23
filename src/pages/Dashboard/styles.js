import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 0 30px;
  margin-top: 20px;
  background: linear-gradient(-90deg, #0f0f17, #0f0f17);
`;

export const ContentChart = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
`;

export const ContentCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  max-width: 900px;
  margin: 0 auto;
  padding-bottom: 20px;

  div {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    background: linear-gradient(-180deg, #6756b8, #fa435f);
    border-radius: 4px;
    padding: 20px;

    h1 {
      font-size: 18px;
      color: #fff;
      margin-bottom: 15px;
    }

    strong {
      font-size: 13px;
      line-height: 20px;
      color: #fff;
      margin-top: 5px;
    }

    span {
      margin-bottom: 20px;
      font-size: 30px;
      color: #fff;
    }
  }
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      font-size: 15px;
      color: #999999;
      margin-right: 30px;

      svg {
        margin-right: 7px;
        transition: 0.4s;
      }

      &:hover {
        svg {
          color: ${darken(0.2, '#6756b8')};
          transition: 0.4s;
        }
      }
    }

    span {
      float: left;
      display: block;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  align-items: center;
  flex-direction: row;

  div {
    text-align: right;
    margin-right: 10px;

    a {
      margin-top: 2px;
      font-size: 12px;
      color: #999;
      margin-right: 40px;
      font-size: 14px;
      font-weight: bold;
      transition: 0.4s;

      img {
        border-radius: 35px;
        margin-top: 28px;
      }
    }
  }
`;

export const Today = styled.span`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 25px;
  margin-top: -25px;
`;
