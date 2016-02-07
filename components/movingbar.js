'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ProgressBarAndroid
} from "react-native";

// import TimerMixin from "react-timer-mixin";
// var TimerMixin = require('react-timer-mixin'); // Import wont allow for interval unmount

var MovingBar = React.createClass({


  getInitialState: function () {
    return {
      progress: 0,
      showProgress: false
    };
  },
  showProgress: function () {
    // Set showProgress to false, which should remove it by making it null
    this.setState({showProgress: true});
  },
  toggleProgress: function (arg) {
    // arg should either be true or false
    this.setState({showProgress: arg});
  },
  stopProgress: function () {
    clearInterval(this.interval);
  },
  startProgress: function () {
    var progress = (this.state.progress + 0.02) % 1;
    this.setState({progress: progress});
  },
  componentDidMount: function () {
    this.interval = setInterval(this.startProgress, 1000);
  },
  componentWillUnmount: function () {
    clearInterval(this.interval);
  },
  render: function () {

    var progressBar = this.state.showProgress ? <ProgressBarAndroid styleAttr="Horizontal"
                                     color="#9C2929"
                                     progress={this.state.progress}
                                     style={styles.progress}
    	                             indeterminate={false}/> : null;
    
    return (
      <View>
	{progressBar}
      </View>
    );
  }
});

const styles = StyleSheet.create({
  progress: {
    width: 150,
    height: 20
  }
});

module.exports = MovingBar;
