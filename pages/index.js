import Layout from './layout';
import PostLink from './post-link';

export default () => (
  <Layout>
    <h1>My Blog!</h1>
    <ul>
      <PostLink title="Hard Coded Title" />
      <PostLink title="Hard Coded Title 2: Electric Boogaloo" />
      <PostLink title="Hard Coded Title 3: The Most Hard Coded" />
    </ul>
  </Layout>
);
