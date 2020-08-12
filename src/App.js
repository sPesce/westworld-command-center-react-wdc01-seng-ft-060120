import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import Headquarters from './components/Headquarters'
import WestworldMap from './components/WestworldMap'

const HOSTS =  "http://localhost:4000/hosts/"


class App extends Component {
  
  state = {
    hosts: []
  }

  componentDidMount()
  {
    this.fetchHosts()
  }

  fetchHosts = () =>
  {
    fetch(HOSTS)
    .then(r => r.json())
    .then(json => this.setState({hosts: json}))
  }


  render(){
    return (
      <Segment id='app'>
        <WestworldMap hosts={this.state.hosts}/>
        <Headquarters hosts={this.state.hosts}/>
      </Segment>
    )
  }
}

export default App;
