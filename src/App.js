import { render } from '@testing-library/react'
import React from 'react'
import Routing from './Routing/Routing' 


export default class App extends React.Component{
  render(){
    return(
      <div>
        <Routing/>
      </div>
    )
  }
}