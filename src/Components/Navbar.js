import React, {Component} from 'react'

export default class Navbar extends Component{
  constructor(){
    super()
    this.state = {}
  }
  render(){
    return(
        <div id='btn-container'>
            <div id='navbar'>
                <button id='click' onClick={this.props.previous}> {`<`} Previous </button>
                <div id='crud'>
                <button id='edit' onClick={this.props.edit}> Edit </button>
                <button id='edit' onClick={this.props.delete}> Delete </button>
                <button id='edit' onClick={this.props.new}> New </button>
                </div>
                <button id='click' onClick={this.props.next}> Next {`>`} </button>
            </div>
        </div>
    )
  }
}