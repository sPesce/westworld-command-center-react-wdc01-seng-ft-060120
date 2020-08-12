import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'

const AREAS =  "http://localhost:4000/areas/"

class WestworldMap extends React.Component {

  state = {
    areas: []
  }

  componentDidMount()
  {
    fetch(AREAS)
    .then(r => r.json())
    .then(json => this.setState({areas: json}))
  }

  generateAreas = () =>
  {
    const areaMap = {};
    this.props.hosts.forEach(host => {
      if(host.active)
      {
        const area = host.area
        !areaMap[area] && (areaMap[area] = [] )
        areaMap[area].push(host)
      }
        
    })
    console.log(areaMap)
    return this.state.areas.map(area => {
      const {name} = area
      return <Area area={area} hosts={areaMap[name]}/>
    })
  }

  render()
  {    
    return (
      <Segment id="map" >
        {this.generateAreas()}
      </Segment>
    )
  }
}

export default WestworldMap
