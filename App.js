import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SoundButton from './components/soundbutton';
import * as Expo from 'expo';
import { Audio } from 'expo-av';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Joe The Bachelor's {"\n"}Epic Soundboard!</Text>
        <View style={styles.wrapper}>
          <SoundButton emojiName='man' onPress={() => this.playSound('this_is_a_sound')}></SoundButton>
          <SoundButton emojiName='woman' onPress={() => this.playSound('this_is_a_sound')}></SoundButton>
          <SoundButton emojiName='woman' onPress={() => this.playSound('this_is_a_sound')}></SoundButton>
          <SoundButton emojiName='woman' onPress={() => this.playSound('this_is_a_sound')}></SoundButton>
          <SoundButton emojiName='woman' onPress={() => this.playSound('this_is_a_sound')}></SoundButton>
          <SoundButton emojiName='woman' onPress={() => this.playSound('this_is_a_sound')}></SoundButton>
          <SoundButton emojiName='woman' onPress={() => this.playSound('this_is_a_sound')}></SoundButton>
          <SoundButton emojiName='woman' onPress={() => this.playSound('this_is_a_sound')}></SoundButton>
          <SoundButton emojiName='woman' onPress={() => this.playSound('this_is_a_sound')}></SoundButton>
          <SoundButton emojiName='woman' onPress={() => this.playSound('this_is_a_sound')}></SoundButton>
          <SoundButton emojiName='man' onPress={() => this.playSound('burrito')}></SoundButton>
          <SoundButton emojiName='woman' onPress={() => this.playSound('vegang')}></SoundButton>
          <SoundButton emojiName='grey_question' onPress={() => this.playSound('question_mark')}></SoundButton>
          <SoundButton emojiName='laughing' onPress={() => this.playSound('laughing')}></SoundButton>
        </View>
      </View>
    );
  }

  playSound = async (soundName) => {
    console.log(`playSound: ${soundName}`);
    const soundObject = new Audio.Sound()
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
  'question_mark': require('./assets/question_mark.m4a'),
  'laughing': require('./assets/laughing.m4a'),
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
    flexWrap: "wrap"
  },
  heading: {
    textAlignVertical: 'top',
    textAlign: 'center',
    color: '#ccc',
    fontSize: 30,
    marginBottom: 60,
  },
});
