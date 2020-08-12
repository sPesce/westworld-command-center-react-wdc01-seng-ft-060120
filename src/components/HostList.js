import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = (props) => {
  const {hosts} = props
  return(
    <Card.Group itemsPerRow={6}>
      {hosts && hosts.map(host => <Host host={host}/>)}
    </Card.Group>
  )
}

export default HostList
