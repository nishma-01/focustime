import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import Constants from 'expo-constants';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/focus';
import { Timer } from './src/features/timer';
import { FocusHistory } from './src/features/FocusHistory';

export default function App() {
  console.log('this is going to github and we are testing stuff andanother one');
  const [currentSubject, setCurrentSubject] = useState();
  const [history, setHistory] = useState([])
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? ( //means if we do not have a current subject, show the focus feature
       <>
        <Focus addSubject={setCurrentSubject} /> 
        <FocusHistory history={history} />
        </>
      ) : (
        //otherwise show the view with text inside as per below.
       //BELOW VIEW NO LONGER NEEDED AS IT IS REPLAEDBY TIMER COMPONENT BELOW:
        // <View>
        //   <Text style={{ color: colors.white }}>
        //     I am going to render the timer for {currentSubject}
        //   </Text>
        // </View>

        <Timer
        focusSubject={currentSubject} //is the task we are counting down
        onTimerEnd={(subject) => { //tells what to do when timer ends
          setHistory([...history, subject])
        }} 
        clearSubject={() => setCurrentSubject(null)} //tells us how to clear subject
         />
      )}
    </SafeAreaView> //SafeAreaView component used to auto-apply it's own padding rule for ios 11+ devices to ensure view is on screen in correct position and avoids the notch. Will override any other padding implement in the script.
  );
}

const styles = StyleSheet.create({
  //still need this set of padding for android devices
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, //this accounts for the status bar on android device view so ensures the padding is set to avoid the status bar (notch SafeAreaView equivalent to ios)
    backgroundColor: colors.darkBlue,
  },
});

// whenever we call addSubject inside focus, it will know to add it as a value, which will be added when the 'onPress' function is called in focus