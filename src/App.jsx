import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import './App.css';

var APIkey = '498cb3731a91441784951e1fd976bdc6';

var key = '?apiKey='+APIkey;

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      activeKey: 'business',
      articles: [

      ],
    }
  }

  handleTabSelect = (key, e) => {
    this.setState({activeKey: key});
  }

  handleSearchClick = (e) => {
    e.preventDefault();
    this.setState({activeKey: 'search'});
  }

  render(){
    return(
      <div className="container">
        <Tab.Container activeKey={this.state.activeKey} onSelect={this.handleTabSelect}>
        <div className="searchbar">
          <input type="text" placeholder="search keywords" className="search"/>
          <Button variant="primary" className="btn" onClick={this.handleSearchClick} type="submit">Search</Button>
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
          <Tab.Content>
            <Tab.Pane eventKey="business">
            <div className="articles">
              <h1>Business</h1>
              <div className="article">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur sit ex reprehenderit voluptatem quod corrupti nobis impedit perferendis repellat id.</p>
              </div>
              <div className="article">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur sit ex reprehenderit voluptatem quod corrupti nobis impedit perferendis repellat id.</p>
              </div>
              <div className="article">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur sit ex reprehenderit voluptatem quod corrupti nobis impedit perferendis repellat id.</p>
              </div>
            </div>
            </Tab.Pane>
            <Tab.Pane eventKey="science">
            <div className="articles">
              <h1>Science</h1>
              <div className="article">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur sit ex reprehenderit voluptatem quod corrupti nobis impedit perferendis repellat id.</p>
              </div>
              <div className="article">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur sit ex reprehenderit voluptatem quod corrupti nobis impedit perferendis repellat id.</p>
              </div>
              <div className="article">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur sit ex reprehenderit voluptatem quod corrupti nobis impedit perferendis repellat id.</p>
              </div>
            </div>
            </Tab.Pane>
            <Tab.Pane eventKey="technology">
            <div className="articles">
              <h1>Technology</h1>
              <div className="article">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur sit ex reprehenderit voluptatem quod corrupti nobis impedit perferendis repellat id.</p>
              </div>
              <div className="article">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur sit ex reprehenderit voluptatem quod corrupti nobis impedit perferendis repellat id.</p>
              </div>
              <div className="article">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur sit ex reprehenderit voluptatem quod corrupti nobis impedit perferendis repellat id.</p>
              </div>
            </div>
            </Tab.Pane>
          </Tab.Content>
        </div>
        </Tab.Container>
      </div>
    )
  }
}

export default App;
