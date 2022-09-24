React Native Soundboard
=

This is a simple project to help learn React. 

Getting Started
- 
Install depencies:

```yarn install```

Run the app:

```expo start```

Sounds
-
Sound files were recorded using Quicktime Player: 
* File -> New Audio Recording

Save sound files in `.m4a` format and placed the `/assets` directory. 

Bugs
-
The original Expo.Audio does not work with later versions of Expo, had to update to expo-av library. Also had to upgrade expo ($expo upgrade) for things to work.

When running the app in Expo on an Android device, periodically the sound playback will stop working until expo is manually closed and reopened.

This is a known issue with Expo on Android and may not be fixed soon. I may consider using another sound player in future if the issue is not fixed.


