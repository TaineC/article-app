import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Article from './Article.jsx';
import './App.css';

var APIkey = '498cb3731a91441784951e1fd976bdc6';

var key = '?apiKey='+APIkey;

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      activeKey: 'business',
      articles: [
        {
        //   title: "T-bond rates to decline on BSP's dovish stance - BusinessWorld Online",
        //   author: "Neil Charm",
        //   content: "THE GOVERNMENT will likely see lower yields for the reissued 10-year Treasury bonds (T-bond) to be auctioned off today following the central bank’s rate cut and amid dovish signals from the Bangko Sentral ng Pilipinas’ (BSP) chief. The Bureau of the...",
        //   url: "https://www.bworldonline.com/t-bond-rates-to-decline-on-bsps-dovish-stance/",
        // },
        // {
        //   title: "Japan's love of foreign insurance set to wane - BusinessWorld Online",
        //   author: "Neil Charm",
        //   content: "TOKYO Japan’s craze for overseas insurance products, driven by a need for better yield than the near-zero ones at home, has been a long-standing headwind for the yen as domestic insurers bought foreign bonds. But demand is likely to cool as the authorities...",
        //   url: "https://www.bworldonline.com/japans-love-of-foreign-insurance-set-to-wane/",
        // },
        // {
        //   title: "Les banques françaises profitent des difficultés de leurs clients les plus pauvres - La Lettre Patriote",
        //   author: "Didier Dewitte",
        //   content: "Selon nos confrères de Capital, une étude, effectuée par le comité consultatif du secteur financier (CCSF), montre que les frais bancaires sont beaucoup plus élevés en France quailleurs en Europe. Selon cette étude, que Le Parisien a pu consulter, le service...",
        //   url: "https://lalettrepatriote.com/les-banques-francaises-profitent-des-difficultes-de-leurs-clients-les-plus-pauvres/",
        },
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

  loadCategory = (category) => {
    var articlesURL = 'https://newsapi.org/v2/top-headlines'+key+'&category='+category;
    fetch(articlesURL)
      .then(res=>res.json())
      .then((data)=>{
        var articles = data.articles;
        // console.log(articles);
        return articles;
      })
  }

  componentDidMount(){
    this.loadCategory();
  }

  // loadCategory(eventKey);

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
              {this.state.articles.map((article) => {
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
