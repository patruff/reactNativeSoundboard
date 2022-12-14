import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, StyleSheet, Text} from 'react-native'
import Emoji from 'react-native-emoji';

class soundButton extends Component {
  render() {
    const { emojiName, onPress } = this.props;
    return (
      <TouchableOpacity style={styles.buttonStyle} onPress={() => onPress()}>
        <Text style={styles.heading}>{emojiName}</Text>
        <Emoji name="man" style={{fontSize:30}} />
      </TouchableOpacity>
    );
  }
}

soundButton.propTypes = {
  emojiName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  buttonStyle: {
    padding:10,
    margin:2,
    borderRadius: 10,
    backgroundColor: '#09c',
  }
});

export default soundButton;
