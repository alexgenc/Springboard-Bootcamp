import React from 'react';
import TitleList from "./TitleList";

function Home() {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">Welcome to <b>Blogly</b>, where you can create a unique and beautiful blog.</p>
        <hr className="my-4" />
        <p className="lead font-weight-bold">Supported Features: CREATE/UPDATE/DELETE/UP-VOTE/DOWN-VOTE blog posts, ADD/REMOVE comments</p>
        <div className="card text-white bg-info mb-3" style={{'maxWidth': '36rem'}}>
          <div className="card-body">
          <h5 className="card-title">Tech Stack</h5>
          <p className="card-text">This is a full stack app that uses Node.js and Express.js on the backend, React.js and Redux.js for the frontend, postgreSQL for database, and Bootstrap, MaterialUI and CSS for styling!
          </p>
          </div>
        </div>
        
      </div>
      <h2 className="text-center">Blog Posts</h2>
      <TitleList />
    </div>
    
  );
}

export default Home;