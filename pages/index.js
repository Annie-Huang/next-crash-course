import ArticleList from '../components/ArticleList';
import { server } from '../config';

export default function Home({ articles }) {
  console.log('articles=a', articles);

  return (
    <div>
      <ArticleList articles={articles}></ArticleList>
    </div>
  );
}

/*export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};*/

export const getStaticProps = async () => {
  // Need to be absolute path
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
