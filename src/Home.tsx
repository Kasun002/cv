import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div>
        <Link to="/react">React</Link>
      </div>
      <div>
        <Link to="/angular">Angular</Link>
      </div>
    </>
  );
}

export default Home;
