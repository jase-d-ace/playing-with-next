import { withRouter } from 'next/router';
import React, { Component } from 'react';
import Layout from './layout';
import Content from './content';
import '../static/style.css'

class Page extends Component {
  constructor() {
    super();
    this.state = {
      apiDataLoaded: false,
      apiData: null
    }
  }

  getInitialProps = async () => {
    const res = await fetch('https://baconipsum.com/api/?type=meat-and-filler');
    const data = await res.json();
    this.setState({
      apiDataLoaded: true,
      apiData: data
    })
  }

  componentDidMount() {
    this.getInitialProps();
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
