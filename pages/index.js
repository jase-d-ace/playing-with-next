import Link from 'next/link';
import Layout from './layout';


const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

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
