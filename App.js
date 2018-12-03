import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title='This is a sound...' onPress={() => this.playThisIsASound()} styles={{marginTop: 20}}></Button>
        <Button title='Burrito' onPress={() => this.playBurrito()} styles={{marginTop: 20}}></Button>
      </View>
    );
  }

  async componentDidMount() {

  }

  playThisIsASound = async () => {
    console.log('playThisIsASound');
    const soundObject = new Expo.Audio.Sound();
    try {
      await soundObject.loadAsync(require(`./assets/this_is_a_sound.m4a`));
      await soundObject.playAsync();
      // Your sound is playing!
    } catch (error) {
      console.log(error);
    }
  }

  playBurrito = async () => {
    console.log('playBurrito');
    const soundObject = new Expo.Audio.Sound();
    try {
      await soundObject.loadAsync(require(`./assets/burrito.m4a`));
      await soundObject.playAsync();
      // Your sound is playing!
    } catch (error) {
      console.log(error);
    }
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 10,
  }
});
