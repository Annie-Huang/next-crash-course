import Link from 'next/link';
import { useRouter } from 'next/router';

// Data file that it makes the call underneath is: http://localhost:3000/_next/data/development/article/1.json
const article = ({ article }) => {
  // const router = useRouter();
  // const { id } = router.query;
  // return <div>This is an article {id}</div>;

  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  );
};

/* Using getStaticProps will make it much more faster than getServerSideProps because it's not
   dynamically generated:
*/
// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//
//   const article = await res.json();
//
//   return {
//     props: {
//       article,
//     },
//   };
// };

// This will get things from the params.id when on request.
export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

// This will get every post from the /posts URL.
// You can go directly http://localhost:3000/article/20 to fetch the data.
export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const articles = await res.json();
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  console.log('ids=', ids);
  console.log('paths=', paths);

  return {
    paths,
    fallback: false,
  };
};

export default article;
