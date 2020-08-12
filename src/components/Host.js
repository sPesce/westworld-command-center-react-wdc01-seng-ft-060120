import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = (props) => {
  const {host} = props
  return(
    <Card
      className="host"
      //onClick={ /* On Click what? */}
      image={host.imageUrl}
      raised
    />
  )
}

export default Host
