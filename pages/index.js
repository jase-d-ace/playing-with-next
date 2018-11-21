import Layout from './layout';
import PostLink from './post-link';

export default () => (
  <Layout>
    <h1>My Blog!</h1>
    <ul>
      <PostLink id="first-post" title="Hard Coded Title" />
      <PostLink id="second-post" title="Hard Coded Title 2: Electric Boogaloo" />
      <PostLink id="third-post" title="Hard Coded Title 3: The Most Hard Coded" />
    </ul>
  </Layout>
);
