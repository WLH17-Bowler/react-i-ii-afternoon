import React, {Component} from 'react'
import Navbar from './Navbar'
import Slide from './Slide'
import data from '../data'

export default class Deck extends Component{
  constructor(){
    super()
    this.state = {
        currentValue: 0,
        data: data
    }
  }
  handlePrevious = () => {
    let value = this.state.currentValue
    let lastIndex = this.state.data.length - 1
    console.log(value)
    if(value === 0){
      value = lastIndex
    }else{
      value--
    }
    this.setState({currentValue: value})
  }
  handleNext = () => {
    let value = this.state.currentValue
    let lastIndex = this.state.data.length - 1
    console.log(value)
    if(value === lastIndex){
      value = 0
    }
    else{
      value++
    }
    this.setState({currentValue: value})
  }
  handleEdit = () => {
    alert('Edit coming soon')
  }
  handleNew = () => {
    alert('Add New coming soon')
  }
  handleDelete = () => {
    let value = this.state.currentValue
    let arr = this.state.data
    arr.splice(value, 1)
    this.setState({data: arr, currentValue: 0})
  }

  render(){
    return(
      <div id='bulk'>
        <Slide  data={this.state.data[this.state.currentValue]} length={this.state.data.length} index={this.state.currentValue + 1}/>
        <Navbar previous={this.handlePrevious} delete={this.handleDelete} next={this.handleNext} new={this.handleNew} edit={this.handleEdit}/>
      </div>
    )
  }
}