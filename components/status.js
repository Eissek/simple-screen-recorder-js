 /*
   Displays current status of App
 */

"use strict";

import React,
{
  Component,
  StyleSheet,
  Text,
  View,
} from "react-native";

var Status  = React.createClass({

  // getInitialState: function () {
    
  // },
  
  render: function () {

    return (
      <View style={styles.countdown}>
	<Text>
	 {this.props.status}
	</Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  countdown: {
    alignSelf: "center",
    justifyContent: "center",
    flexDirection: "column"
  }
});

module.exports = Status;
