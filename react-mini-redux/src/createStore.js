import createConnect from './createConnect'

let defParams = {
  reducer:function(statc, action){  
    return action
  }, 
  initState:{}, 
  actions:{}, 
  isLog:false,
}

let lastLog = new Date();
function createStore(arags=defParams){
  let newArags = {...defParams, ...arags}
  let {reducer, initState, actions, isLog} = newArags
  const allFunc = []
  let state = {...initState}
  function subscribe(func){
    allFunc.push(func)
    return allFunc.length
  }
  function unSubscribe(num){
    allFunc.splice(num, 1)
  }
  function dispatch(action){
    if(typeof action === 'function'){
      const reAction = action(dispatch, state)
      state = reducer(state, reAction)
      if(isLog){
        let now = new Date();
        console.log({
          t: now.__format('h:mm:ss'),
          o: now-lastLog+'ms',
          action:reAction,
          state,
        })
        lastLog = new Date();
      }
    } else {
      state = reducer(state, action)
      if(isLog){
        console.log({
          t: now.__format('h:mm:ss'),
          o: now-lastLog+'ms',
          action,
          state,
        })
        lastLog = new Date();
      }
    }
    for (let i = 0, l = allFunc.length; i < l; i++) {
        allFunc[i](state);
    }
  }
  function getState(){
    return state
  }
  const connect = function(mapProps, mapDispatch=function(){}){
    return createConnect({mapProps, mapDispatch, state, reducer, dispatch,subscribe, unSubscribe})
  }
  return {
    getState, connect, dispatch, subscribe, unSubscribe, actions
  }
}

export default createStore