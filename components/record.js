/*
   This component handles the Record functionality of the app. 
 */


"use strict";

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  ToolbarAndroid,
  TouchableOpacity,
  Alert,
  Animated,
  Easing,
  ProgressBarAndroid
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import TimerMixin from "react-timer-mixin";
var AnimateIcon = Animated.createAnimatedComponent(Icon);

var Record = React.createClass ({
  mixins: [TimerMixin],
  
  startRecord: function () {
    
  },

  getInitialState: function () {
   return {
     recordButtonFade: new Animated.Value(0),
     recordButtonShadow: new Animated.Value(0),
     countdown: "Status: idle",
     instruction: "Press to Record",
     progress: 0
   };
  },
  runAnimation: function () {
    // var timing = Animated.timing;
    // Animated.sequence ([
    //   timing (
    // 	this.state.recordButtonFade,
    // 	{duaration: 9000,
    // 	 delay: 100,
    // 	 easing: Easing.in(Easing.ease),
    // 	 toValue: 800}),
    //   Animated.delay(400),
      
    // ])
    
    Animated.timing(
      this.state.recordButtonFade,
      {duration: 1000,
       delay: 100,
       easing: Easing.in(Easing.ease),
       toValue: 1}
    ).start();  
  },
  setProgress: function () {
    var progress = (this.state.progress + 0.02) % 1;
    this.setState({progress: progress});
  },
  componentDidMount: function () {
    this.runAnimation();
    
    // Animated.timing (
    //   this.state.recordButtonShadow,
    //   {duration: 6000,
    //   delay:3000,
    //   easing: Easing.in(Easing.ease),
    //   toValue: 1}
    // ).start();
    this.setState({color: this.state.recordButtonFade.interpolate({
      inputRange: [0,0.3, 1],
      outputRange: ["rgb(156,41,41)", "rgb(255,28,28)", "rgb(156,41,41)"]
    })});

    this.setInterval(this.setProgress, 1000);
  },
  minusOne: function () {
    // this.setState({countdown: this.state.countdown - 1});
    if (this.state.countdown == 1) {

      this.clearInterval(this.interval);
      this.setState({countdown: "Status: Recording"});
      this.setState({instruction: "Press to Stop"});
      // change state
    } else {
      this.setState({countdown: this.state.countdown - 1});
    }

  },

  stopCountdown: function () {
    this.clearInterval(this.interval);
    this.setState({countdown: "Status: Idle"});
    this.setState({instruction: "Press to Record"});
  },
  
  startCountdown: function () {
    // var countdown = this.state.countdown;
    this.setState({countdown: 3});
    if (this.state.countdown === 3) {
      // this.minusOne();
      this.interval = this.setInterval(this.minusOne, 1000);
      
    } else {
      
    }

  },
  
  toggleButtonColour: function () {
    if (this.state.color !== "rgb(255, 28, 28)") {
      this.setState({color: "rgb(255, 28, 28)"},  this.startCountdown());
     
    } else {
      this.setState({color: "rgb(156,41,41)"}, this.stopCountdown());  
    }
    
  },
  componentWillMount: function () {
    
  },
  render: function () {

    // var color = this.state.recordButtonFade.interpolate({
    //   inputRange: [0,0.3, 1],
    //   outputRange: ["rgb(156,41,41)", "rgb(255,28,28)", "rgb(156,41,41)"]
      
    // });
    // var progressBar = this.setState({showProgess: })<ProgressBarAndroid styleAttr="Horizontal"
    //                           color="#9C2929"
    //                           progress={this.state.progress}
    //                           style={styles.progress}
    // 	                      indeterminate={false}/>;
    
    return (
      
      <View style={styles.view}>
	<TouchableOpacity onPress={this.startRecord}
                          onPressIn={this.toggleButtonColour}
	                  activeOpacity={0.8}>
	   <AnimateIcon name="dot-circle-o" size={120} 
            style={{alignItems: "center",
		    alignSelf: "center",
		    justifyContent: "center",
		    elevation:15,
		    opacity: this.state.recordButtonFade,
		    color:this.state.color
		   }} />
	   <Text style={styles.textRecord}>
	     {this.state.instruction}
	   </Text>
	</TouchableOpacity>
	<View>
	  <Text>
	  {this.state.countdown}
          </Text>
	  
	</View>
	<View>
	  
	</View>
	<Text style={styles.recordTime}>

        </Text>
	
	
        
      </View>
	
    );
  }
});

const styles = StyleSheet.create({
  view: {
    // backgroundColor: "#FFF"
    flex:1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  progress: {
    width: 150,
    height: 20
  },
  recordButton: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center"
  },
  textRecord: {
   fontSize: 20
  }
});


module.exports = Record;
