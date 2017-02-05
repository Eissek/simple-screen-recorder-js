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
  TouchableOpacity,
  Alert
} from 'react-native';

import Icon from "react-native-vector-icons/FontAwesome";
import Dropdown from "react-native-dropdown-android";
import Record from "./components/record";
import DialogAndroid from "react-native-dialogs";
import RecordScreen from "./components/recordscreen";
import AppModule from './components/app-module';

// import Stopwatch from "./components/stopwatch";
// var Icon  = require("react-native-vector-icons/FontAwesome");
// import * as Icon from "react-native-vector-icons/FontAwesome";

// import {FontAwesome as Icon} from "react-native-vector-icons/FontAwesome";
// import * as Icon from "react-native-vector-icons/FontAwesome";
// import {Icon} from "react-native-vector-icons/FontAwesome";

// var bars = (<Icon name="rocket" size={30} color="#FFF"/>);



var SimpleScreenRecorder = React.createClass ({

  getInitialState: function () {
    return {
      recordingAvailable: false
    };
  },
  setRecordingAvailable: function (status) {
    this.setState({recordingAvailable: status});
  },
  toggleDrawer: function () {

    this.refs['DRAWER'].openDrawer();
  }, 
  
  showPopupMenu: function () {
    console.log("test");
  },
  showConfirmReplaceDialog: function (filename) {
    var options = {
      title: "Confirm save as",
      content: filename +
	" Already exits. Do you want to replace this file?",
      positiveText: "Yes",
      negativeText: "No",
      onPositive: () => {RecordScreen.replaceExistingFile(filename,
						      (error) => {Alert.alert(error);});}
    };

    var dialog = new DialogAndroid();
    dialog.set(options);
    dialog.show();
    
  },
  parseFilename: function (filename) {
    RecordScreen.saveAs(filename,
			(error) => {Alert.alert(error);},
		       () => {this.showConfirmReplaceDialog(filename);});
    
    // if fileRecorded has been set to true then saveAs else alert error
  },
  showSaveVideoDialog: function () {
    if (!this.state.recordingAvailable) {
      // return Alert.alert("Error", "No Recordings to save!",
      // 		 [{text: "OK", onPress: () => {console.log("OK");}}]);
      return Alert.alert("Error", "No Recording to save!");
    }
    
    var options = {
      title: "Save As",
      content: "Location: /sdcard/SimpleScreenVideos/",
      positiveText: 'OK',
      negativeText: 'Cancel',
      input: {allowEmptyInput: false,
	      prefill: "Video_NAME.mp4",
	      callback: (filename) => { this.parseFilename(filename);}}
    };

    var dialog = new DialogAndroid();
    dialog.set(options);
    dialog.show();
  },
  saveVideoDialog: function () {
    Alert.alert("Save As", "Input",
	       [{text: "Save",
		 onPress: () => console.log("saved")},
	       {text: "Cancel",
		onPress: () => console.log("Canceled")}]);
  } ,
  onActionSelected: function (position) {
    if (position === 0) {
         console.log("test");
      var so = this.state.source;
      // this.setState({source: "heye"});
      var {uri: x} = this.state.jj;
      // Alert.alert("heu", JSON.stringify(x));
      // this.setState({barsIcon: r(this.state.jj.uri)});
      // Alert.alert("hi", JSON.stringify(so));
      // Alert.alert("hi", so.uri);
      // this.saveVideoDialog();
      this.showSaveVideoDialog();
      
    } else if (position === 1) {
      
    } else if (position === 2) {
      
    }
    
  },
  exitApplication: function () {
    AppModule.exit();
  },
  componentWillMount: function () {
    this.setState({barsIcon: require("./Hamburger.png")});
    var thesource = Icon.getImageSource('rocket', 15, "#000000");
    this.setState({jj: thesource});
    // Icon.getImageSource('rocket', 15, "#000000").then((source) => Alert.alert("hi", JSON.stringify(source)));
    // Icon.getImageSource('rocket', 15, "#000000").then((source) => this.setState({ jj: source }));
    this.setState({asource: JSON.stringify(thesource)});
    // Alert.alert("hiss", thesource);
    // this.setState({source: thesource});
    this.setState({source: "heyesssssssss"});
    console.log(thesource);
    // this.setState({barsIcon: source})
  },
  componentDidMount: function () {
     // Icon.getImageSource('rocket', 15, "#000000").then((source) => this.setState({ barsIcon: source }));
    // Alert.alert("message", this.state.source);    
  },
  // shouldComponentUpdate: function () {

    
  // },

  render: function () {
    const navigationView = (
      <View style={{flex:1, backgroundColor: "#FFF", padding: 14,
		    flexDirection: 'column', justifyContent:'space-between'}}>
        <Text style={{fontSize: 20, /*margin: 17,*/ textAlign: "left"}}>
	"Drawer is open"
        </Text>
	<View>
	<TouchableOpacity onPress={this.exitApplication}>
	<Text style={{fontSize: 20, margin: 5, textAlign: "left"}}>
	<Icon name="power-off" size={27} color="#000000"/>
	{' '} Exit
	</Text>
	</TouchableOpacity>
	</View>
      </View>
    );
    
   var popupMenu = (
        <Dropdown style={{height: 20, width: 10}}
                values={["choose one", "one", 2, 3, [5,6,7,8]]}
                selected={"1"}
                onChange={(data) => { console.log(data);}} />
     
   );
        
    return (
      <DrawerLayoutAndroid
          drawerWidth={150}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => navigationView}
          ref={'DRAWER'}
	  style={styles.drawerlayout}>
	
        <View style={{alignItems: "center", alignSelf: "stretch"}}>
        <ToolbarAndroid 
                        actions={[{title: "Save as", show: "never"},
                                 {title: "Delete", show: "never"},
                                 {title: "Share", show: "never"}] }
                        onActionSelected={this.onActionSelected}
                        style={styles.toolbar}>
        
                <View style={styles.toolbarTitle}>
                        <TouchableOpacity onPress={this.toggleDrawer}>
                                <Icon name="bars" size={15} color="#000000"/>
                        </TouchableOpacity>
                        <Text style={styles.toolbarHeading}>
                           Simple Screen Recorder
                        </Text>
                        
                </View>
        </ToolbarAndroid>
        </View>
	<Record availability={this.setRecordingAvailable}/>
	
	
        </DrawerLayoutAndroid>
    );
  }
});


// <View style={{flex:1, backgroundColor: "#FFFFFF", alignItems: "center"}}>
//                 <View style={{flexDirection: "row",
//                               backgroundColor: "#FFB700",
//                               alignItems: "center",
//                               alignSelf: "stretch",
//                               height: 40,
//                               justifyContent: "space-between" }}>

//                         <TouchableOpacity onPress={this.toggleDrawer}>
//                                 <Icon name="bars" size={15} color="#000000" style={{marginLeft: 10}}/>
//                         </TouchableOpacity>
//                          <Text style={{margin: 5, fontSize: 15, textAlign: "center"}}>
                                
//                                 Simple Screen Recorder
//                         </Text>
//                         <Icon name="ellipsis-v" size={15} color="#000000" style={{marginRight: 10}}/>
//                 </View>

//        </View>


const styles = StyleSheet.create({
  drawerlayout: {
    flex:1
  },
  toolbar: {
    backgroundColor: "#FFB700",
    alignSelf: "stretch",
    height: 46  
  },
  toolbarTitle: {
    flex:1,
    flexDirection: "row",
    alignItems: 'center',
    // justifyContent: 'center',
    marginLeft: 10, backgroundColor: "#FFB700"
    
  },
  toolbarHeading: {
    fontSize: 15, marginLeft: 10, alignItems:"center"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

AppRegistry.registerComponent('SimpleScreenRecorder', () => SimpleScreenRecorder);
