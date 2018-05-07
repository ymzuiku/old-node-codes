function withDispatch(dispatch, actions){
  if(!actions._auto){
    return actions
  }
  const withAc = {}
  if(actions){
    for (const key in actions) {
      if (actions.hasOwnProperty(key)) {
        if(key !== '_auto'){
          const func = actions[key];
          withAc[key] = function(){
            dispatch(func())
          }
        }
      }
    }
  }
  return withAc
}

export default withDispatch