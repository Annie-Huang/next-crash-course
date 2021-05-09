import { articles } from '../../../data';

// Things place into the /pages/api/articles will automatically be access through:
// http://localhost:3000/api/articles
// This can come from a DB, not necessary from a data file.
export default function handler(req, res) {
  res.status(200).json(articles);
}
