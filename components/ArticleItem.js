import Link from 'next/link';
import articleStyles from '../styles/Article.module.css';

// For local: http://localhost:3000/_next/data/development/article/1.json
const ArticleItem = ({ article }) => {
  return (
    <Link href='/article/[id]' as={`/article/${article.id}`}>
      <a className={articleStyles.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.body}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;
