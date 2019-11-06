
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Button
} from 'react-native';
import Router, { OpenDrawerBtn } from "./router";
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake IOS 878787for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const { width, height } = Dimensions.get('window');
// this.props.navigation.openDrawer();
// import { createSwitchNavigator, createAppContainer, } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createDrawerNavigator } from 'react-navigation-drawer';
// const MenuButton = (props) => {
//   const { navigate } = props.navigation
//   // const routeIndex = props.navigation.state.index
//   return (
//     <View>
//       <TouchableOpacity onPress={() => { routeIndex === 0 ? navigate('DrawerOpen') : navigate('DrawerClose') }}>
//         {/* <Image source={require('png')} /> */}
//       </TouchableOpacity>
//     </View>
//   )
// }
type Props = {};
export default class IndexScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({

    // static navigationOptions = {
    // title: '我是有Header的DrawerScreen',
    // headerTitle: '我是DrawerScreen的Header',
    headerMode: 'none',
    // headerRight: () => (
    //   <Button
    //     onPress={() => alert('This is a button!')}
    //     title="Info"
    //     color="#f2E"
    //   />
    // ),
    // // headerLeft: () => <MenuButton />,
    // headerLeft: () => (
    //   <Button
    //     onPress={() => navigation.openDrawer()}
    //     title="Info"
    //     color="#f2E"
    //   />
    // ),



    /* No more header config here! */
    /*   //     headerBackTitle和headerTruncatedBackTitle（阅读更多）更改返回按钮旁边显示的文本。
    // 要自定义返回按钮图片，你可以使用 headerBackImage 。
    ///https://reactnavigation.org/docs/zh-Hans/header-buttons.html
    ///https://reactnavigation.org/docs/zh-Hans/headers.html#%E4%BD%BF%E7%94%A8%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E6%9B%BF%E6%8D%A2%E6%A0%87%E9%A2%98*/
  });
  render() {
    return (
      <Router />
      // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      //   <Text>Index Screen </Text>
      //   {/* <Button
      //     title="Go to BottomTabScreen"
      //     onPress={() => this.props.navigation.push('BottomTabScreen')}
      //   />
      //   <Button
      //     title="Go to DrawerScreen"
      //     onPress={() => this.props.navigation.push('DrawerScreen')}
      //   /> */}
      //   {/* <FontAwesome5 name="battery-full" size={30} color="#6787A0" /> */}

      // </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCF1DB',
    padding: 50
  },
  TextBox: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#C5BBB9'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#F4DA17',
    padding: 10,
    borderRadius: 25,
    margin: 50
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginRight: 6,
  }
})