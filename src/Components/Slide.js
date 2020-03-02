import React, {Component} from 'react'
import '../App.css'

export default class Slide extends Component{
  constructor(){
    super()
    this.state = {}
  }
  render(){
    let list = this.props.data.favoriteMovies.map((movie, index) => {
      return <li key={index}>{movie} </li>
    })
    return(
      <div  id="person-main">
        <div id='slide-num'>
          <h3> {this.props.index} / {this.props.length} </h3>
        </div>
        <div>
          <h2> {this.props.data.name.first} </h2>
          <p> {this.props.data.city} </p>
          <p> {this.props.data.title} </p>
          <p> {this.props.data.employer} </p>
          <p> Favorite Movies: </p>
          <ul> {list} </ul>
        </div>
      </div>
    )
  }
}