import Layout from './layout';
import PostLink from './post-link';
import someData from './data-dump';

export default () => (
  <Layout>
    <h1>My Blog!</h1>
    <ul>
      {someData.map(el => <PostLink key={el.id} {...el} />)}
    </ul>
  </Layout>
);
