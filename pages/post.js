import { withRouter } from 'next/router';
import React, { Component } from 'react';
import Layout from './layout';
import Content from './content';

class Page extends Component {
  constructor() {
    super();
    this.state = {
      apiDataLoaded: false,
      apiData: null
    }
  }

  componentDidMount() {
    fetch('https://baconipsum.com/api/?type=meat-and-filler')
    .then( res => res.json())
    .then( jsonRes => {
      this.setState({ apiDataLoaded: true, apiData: jsonRes })
    })
    .catch( err => {
        console.log(err)
    })
  }

  render() {
    return(
      <Layout>
        <h1>{this.props.router.query.title}</h1>
        <Content content={this.state.apiData} />
      </Layout>
    )
  }
}

export default withRouter(Page)
