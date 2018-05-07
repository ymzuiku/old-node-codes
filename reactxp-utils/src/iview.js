import RX from 'reactxp'
let isFullPhone = false
let iw = ()=>{
  return RX.UserInterface.measureWindow().width
}
let ih = ()=>{
  return RX.UserInterface.measureWindow().height
}
let topBarHeight = 70
let bottomBarHeight = 53
let stateBarHeight = 0
let homeLineHeight = 0
if(RX.Platform.getType() === 'ios'){
  stateBarHeight = 20
  if(ih() == 812){
    isFullPhone = 'iPhone X'
    bottomBarHeight = 82
    topBarHeight = 87
    stateBarHeight = 32
    homeLineHeight = 26
  }
}
else if(RX.Platform.getType() === 'android'){
  stateBarHeight = 24
}
else if(RX.Platform.getType() === 'web'){
  stateBarHeight = 0
  topBarHeight = 40
}

let iview = {
  iw, ih, isFullPhone, topBarHeight, bottomBarHeight,stateBarHeight,homeLineHeight
}

export default iview