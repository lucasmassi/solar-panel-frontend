import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import { Text } from './styles';

export default class Dashboard extends Component {
  state = {
    loading: 0,
  };

  render() {
    return (
      <>
        <Text>Dashboard</Text>
      </>
    );
  }
}
