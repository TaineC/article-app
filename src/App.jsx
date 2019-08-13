import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Article from './Article.jsx';
import './App.css';

var APIkey = '498cb3731a91441784951e1fd976bdc6';

var key = '&apiKey='+APIkey;

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      // activeKey: 'business',
      businessArticles: [],
      scienceArticles: [],
      technologyArticles: [],
      entertainmentArticles: [],
      healthArticles: [],
      sportsArticles: [],
      searchInput: '',
      articleSearch: [],
    }
  }

  handleTabSelect = (key, e) => {
    this.setState({activeKey: key});
  }

  handleSearchClick = (e) => {
    e.preventDefault();
    this.loadSearch(this.state.searchInput);
    this.setState({activeKey: 'search'});
    this.setState({searchInput:''});
  }

  loadCategory = (category) => {
    var articlesURL = 'https://newsapi.org/v2/top-headlines?language=en&country=nz'+key+'&category='+category;
    fetch(articlesURL)
      .then(res=>res.json())
      .then((data)=>{
        var articles = data.articles;
        
        if(category == 'business'){
          this.setState({businessArticles: articles});
        }
        if(category == 'science'){
          this.setState({scienceArticles: articles});
        }
        if(category == 'technology'){
          this.setState({technologyArticles: articles});
        }
        if(category == 'entertainment'){
          this.setState({entertainmentArticles: articles});
        }
        if(category == 'health'){
          this.setState({healthArticles: articles});
        }
        if(category == 'sports'){
          this.setState({sportsArticles: articles});
        }
      });
  }

  componentDidMount(){
    this.loadCategory('business');
    this.loadCategory('science');
    this.loadCategory('technology');
    this.loadCategory('entertainment');
    this.loadCategory('health');
    this.loadCategory('sports');
  }

  handleInputChange = (e) => {
    this.setState({searchInput: e.target.value});
  }

  loadSearch = (term) => {
    var articlesURL = 'https://newsapi.org/v2/top-headlines?language=en&country=nz'+key+'&q='+term;
	  fetch(articlesURL)
		  .then( res=>res.json())
		  .then((data)=>{
			  var articles = data.articles;
        
        this.setState({articleSearch: articles});
		  })
  }

  render(){
    return(
      <div className="container">
        <Tab.Container activeKey={this.state.activeKey} onSelect={this.handleTabSelect}>
        <h1>Search Content or Select Category</h1>
        <div className="searchbar">
          <input type="text" placeholder="search keywords" className="search" value={this.state.searchInput} onChange={this.handleInputChange}/>
          <Button variant="primary" className="btn" onClick={this.handleSearchClick} type="submit">Search</Button>
        </div>
        <div className="articles-layout">
          <Nav className="nav-items flex-column">
            <Nav.Item>
              <Nav.Link eventKey="business" className="item">Business</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="science" className="item" >Science</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="technology" className="item">Technology</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="entertainment" className="item">Entertainment</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="health" className="item">Health</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="sports" className="item">Sports</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="business">
            <div className="articles">
              <h2>{this.state.activeKey}</h2>
              {this.state.businessArticles.map((article) => {
                var articleProps = {
                  ...article,
                  key: Math.random(),
                }

                return(<Article {...articleProps}/>)
              })}
            </div>
            </Tab.Pane>
            <Tab.Pane eventKey="science">
            <div className="articles">
              <h2>{this.state.activeKey}</h2>
              {this.state.scienceArticles.map((article) => {
                var articleProps = {
                  ...article,
                  key: Math.random(),
                }

                return(<Article {...articleProps}/>)
              })}
            </div>
            </Tab.Pane>
            <Tab.Pane eventKey="technology">
            <div className="articles">
              <h2>{this.state.activeKey}</h2>
              {this.state.technologyArticles.map((article) => {
                var articleProps = {
                  ...article,
                  key: Math.random(),
                }

                return(<Article {...articleProps}/>)
              })}
            </div>
            </Tab.Pane>
            <Tab.Pane eventKey="entertainment">
            <div className="articles">
              <h2>{this.state.activeKey}</h2>
              {this.state.entertainmentArticles.map((article) => {
                var articleProps = {
                  ...article,
                  key: Math.random(),
                }

                return(<Article {...articleProps}/>)
              })}
            </div>
            </Tab.Pane>
            <Tab.Pane eventKey="health">
            <div className="articles">
              <h2>{this.state.activeKey}</h2>
              {this.state.healthArticles.map((article) => {
                var articleProps = {
                  ...article,
                  key: Math.random(),
                }

                return(<Article {...articleProps}/>)
              })}
            </div>
            </Tab.Pane>
            <Tab.Pane eventKey="sports">
            <div className="articles">
              <h2>{this.state.activeKey}</h2>
              {this.state.sportsArticles.map((article) => {
                var articleProps = {
                  ...article,
                  key: Math.random(),
                }

                return(<Article {...articleProps}/>)
              })}
            </div>
            </Tab.Pane>
            <Tab.Pane eventKey="search">
            <div className="articles search-articles">
              {this.state.articleSearch.map((article) => {
                var articleProps = {
                  ...article,
                  key: Math.random(),
                }

                return(<Article {...articleProps}/>)
              })}
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
