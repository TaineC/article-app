import React, {Component} from 'react';
import './App.css';

class Venue extends Component{
    constructor(props){
      super(props);
    }

  render(){
    return(
        <div className="article">
            <h2 className="title">{this.props.title}</h2>
            <h3 className="author">{this.props.author}</h3>
            <p className="content">{this.props.content}</p>
            <p className="url">{this.props.url}</p>
        </div>
      )
  }
}

export default Venue;