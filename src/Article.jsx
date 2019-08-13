import React, {Component} from 'react';
import './App.css';

class Venue extends Component{
    constructor(props){
      super(props);
    }

  render(){
    return(
        <div className="article">
            <h3 className="title">{this.props.title}</h3>
            <h4 className="author">{this.props.author}</h4>
            <p className="content">{this.props.content}</p>
            <p className="url">{this.props.url}</p>
        </div>
    )
  }
}

export default Venue;