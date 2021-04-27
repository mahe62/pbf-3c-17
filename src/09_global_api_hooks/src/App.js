import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import BlogPost from './components/BlogPost';
import CommentPost from './components/Komentar';
import {
  Button,
  Card,
  Container,
  Row, Col
} from 'react-bootstrap';
class App extends React.Component {

  render() {
    return (
      <div>
        <Container className="p-3">
          <BlogPost />
          <CommentPost />
        </Container>
      </div>
    );
  }
}

export default App;