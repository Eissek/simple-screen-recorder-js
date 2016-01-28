/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  ToolbarAndroid,
  TouchableOpacity
} from 'react-native';

import Icon from "react-native-vector-icons/FontAwesome";
// var Icon  = require("react-native-vector-icons/FontAwesome");
// import * as Icon from "react-native-vector-icons/FontAwesome";

// import {FontAwesome as Icon} from "react-native-vector-icons/FontAwesome";
// import * as Icon from "react-native-vector-icons/FontAwesome";
// import {Icon} from "react-native-vector-icons/FontAwesome";

// var bars = (<Icon name="rocket" size={30} color="#FFF"/>);
var SimpleScreenRecorder = React.createClass ({

  toggleDrawer: function () {

    this.drawer.openDrawer();
  },
  
  render: function () {
    var navigationView = (
      <View style={{flex:1, backgroundColor: "#FFF"}}>
        <Text style={{fontSize: 15, margin: 10, textAlign: "left"}}>
        "I'm In the Drawer YAY!"
        </Text>
      </View>
    );

    
    
    return (
      <DrawerLayoutAndroid
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => navigationView}
          ref={(component) => this.drawer = component}>
        <View style={{flex:1, backgroundColor: "#FFFFFF", alignItems: "center"}}>
                <View style={{flexDirection: "row",
                              backgroundColor: "#FFB700",
                              alignItems: "center",
                              alignSelf: "stretch",
                              height: 40,
                              justifyContent: "space-between" }}>

                        <TouchableOpacity onPress={}>
                                <Icon name="bars" size={15} color="#000000" style={{marginLeft: 10}}/>
                        </TouchableOpacity>
                         <Text style={{margin: 5, fontSize: 15, textAlign: "center"}}>
                                
                                Simple Screen Recorder
                        </Text>
                        <Icon name="ellipsis-v" size={15} color="#000000" style={{marginRight: 10}}/>
                </View>

       </View>
        </DrawerLayoutAndroid>
    );
  }
});

// class SimpleScreenRecorder extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.android.js
//         </Text>
//         <Text style={styles.instructions}>
//           Shake or press menu button for dev menu
//         </Text>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('SimpleScreenRecorder', () => SimpleScreenRecorder);
