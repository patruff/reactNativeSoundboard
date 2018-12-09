import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SoundButton from './components/soundbutton';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Juju & Zac's {"\n"}Epic Soundboard!</Text>
        <View style={styles.wrapper}>
          <SoundButton emojiName='man' onPress={() => this.playSound('this_is_a_sound')}></SoundButton>
          <SoundButton emojiName='smiley' onPress={() => this.playSound('burrito')}></SoundButton>
          <SoundButton emojiName='woman' onPress={() => this.playSound('vegang')}></SoundButton>
        </View>
      </View>
    );
  }

  playSound = async (soundName) => {
    console.log(`playSound: ${soundName}`);
    const soundObject = new Expo.Audio.Sound();
    try {
      await soundObject.loadAsync(sounds[soundName]);
      await soundObject.playAsync();
    } catch (error) {
      console.log(error);
    }
  }

}

const sounds = {
  'this_is_a_sound': require('./assets/this_is_a_sound.m4a'),
  'burrito': require('./assets/burrito.m4a'),
  'vegang': require('./assets/vegang.m4a'),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#036',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    flexDirection: 'row',
  },
  heading: {
    textAlignVertical: 'top',
    textAlign: 'center',
    color: '#ccc',
    fontSize: 30,
    marginBottom: 60,
  },
});
