import React, { PureComponent } from 'react'
import withDispatch from './withDispatch'

function createConnect({mapProps, mapDispatch, state, reducer, dispatch,subscribe, unSubscribe}){
  return function(Comp){
    return class extends PureComponent {
        constructor(props){
          super(props)
          this.state = {
            ...mapProps(state, this.props, dispatch),
            ...withDispatch(dispatch, mapDispatch(dispatch, this.props, state)),
          }
        }
        componentDidMount(){
          this._subscribeNumber = subscribe((newState)=>{
            this.setState({
              ...mapProps(newState, this.props, dispatch)
            })
          })
        }
        componentWillMount(){
          if(this._subscribeNumber){
            unSubscribe(this._subscribeNumber)
          }
        }
        render(){
          return <Comp {...this.state} {...this.props} ></Comp>
        }
    }
  }
}
export default createConnect