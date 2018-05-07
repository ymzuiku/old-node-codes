import React from 'react'
import axios from 'axios'
// import { hotRender } from './froms'
// import hotRender from './utils/hotRender'
import {hotRender} from './utils'

type Props = {
  style?:React.CSSProperties,
  children?:React.ReactInstance,
}
class App extends React.Component<Props> {
  render() {
    return <div >
      <div >Hello React</div>
      <div style={{
        backgroundImage: 'url(assets/img.jpg)',
        backgroundSize: 'contain',
        width: 100, height: 100
      }} ></div>
    </div>
  }
}

hotRender(App)