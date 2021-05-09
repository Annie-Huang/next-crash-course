import Meta from '../components/Meta';

// Will just override the title for Meta component. Will not have duplicate <title> in the head.
const about = () => {
  return (
    <div>
      <Meta title='about' />
      <h1>About</h1>
    </div>
  );
};

export default about;
