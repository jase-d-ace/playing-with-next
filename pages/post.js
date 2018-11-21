import { withRouter } from 'next/router';
import Layout from './layout';

const Page = withRouter(props => (
  <Layout>
    <h1>{props.router.query.title}</h1>
    <p>this is blog content</p>
  </Layout>
));

export default Page
