import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="container">
        <div className="searchbar">
          <input type="text" placeholder="search keywords" className="search"/>
          <Button variant="primary" className="btn">Search</Button>
        </div>
        <div className="articles-layout">
          <Nav className="nav-items flex-column">
            <Nav.Item>
              <Nav.Link eventKey="business" className="item">Business</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="science" className="item">Science</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="technology" className="item">Technology</Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="articles">
            <div className="article">
              <h2>Lorem, ipsum.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur sit ex reprehenderit voluptatem quod corrupti nobis impedit perferendis repellat id.</p>
            </div>
            <div className="article">
              <h2>Lorem, ipsum.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur sit ex reprehenderit voluptatem quod corrupti nobis impedit perferendis repellat id.</p>
            </div>
            <div className="article">
              <h2>Lorem, ipsum.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur sit ex reprehenderit voluptatem quod corrupti nobis impedit perferendis repellat id.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
