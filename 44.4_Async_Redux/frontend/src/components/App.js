import React from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import Navbar from './Navbar';
import Home from "./Home";
import { Route, Switch } from "react-router-dom";
import './App.css';

/** Overall blog application:
 *
 * - shows header, nav links, and contains routes to:
 *   - new form
 *   - homepage
 *   - individual posts
 */

const App = () => {

  return (
    <div>
      <Navbar />
      {/* Routes */}
      <Switch>
        <Route exact path="/new">
          <NewPost />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/:postId">
          <Post />
        </Route>
      </Switch>
    </div>
  );
}

export default App;