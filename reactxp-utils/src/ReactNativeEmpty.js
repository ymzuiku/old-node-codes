import {
  Alert,Button,View,Text,Input,TextInput,Animated,Image,Modal,Picker,ScrollView,Styles,GestureView,WebView,Accessibility,ActivityIndicator,
} from 'reactxp'

let Keyboard ={
  dismiss:()=>{},
}
let Platform = {
  OS:'web',
  select:()=>{},
  Version:1,
}
let StatusBar = {
  animated:false,
  hidden:false,
  translucent:false,
  barStyle:'light-content',
  showHideTransition:'fade',
  setHidden:()=>{},
  setBarStyle:()=>{},
  setBackgroundColor:()=>{},
  setTranslucent:()=>{},
  StatusBarStyle:'defalut',
  StatusBarAnimation:'none',
}

let ReactNativeEmpty = { Keyboard, Platform, StatusBar,
  Alert,Button,View,Text,Input,TextInput,Animated,Image,Modal,Picker,ScrollView,Styles,GestureView,WebView,Accessibility,ActivityIndicator,}

export default ReactNativeEmpty

export {
  Keyboard, Platform, StatusBar,
  Alert,Button,View,Text,Input,TextInput,Animated,Image,Modal,Picker,ScrollView,Styles,GestureView,WebView,Accessibility,ActivityIndicator,
}