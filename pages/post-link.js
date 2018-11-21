import Link from 'next/link';

//the "as" prop that Link gets from next/link allows us to mask our url using whatever we want.
//theoretically we can use stuff like IDs from SQL or whatever we're looking for to pass as an "as" prop.
//the browser will display the "as" message in the URL bar, but the route will match the href prop.
const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default PostLink
