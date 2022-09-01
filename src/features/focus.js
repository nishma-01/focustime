import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes';
//addSubject is now a prop on focus
export const Focus = ({ addSubject }) => {
  
  const [subject, setSubject] = useState(null); 
  //setSubject is a function that takes in a value so can be used to take in the TextInput. Input is stored in the 'state' parameter.
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject} 
          label="What would you like to focus on?"
        />
        <View style={styles.button}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />{' '} 
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
//     flex: 0.1, taking out flex means the component will auto grow and take up however much space needed
  },
  button: {
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row',
  },
});



//subject added when button is pressed which calls the onPress function and this is how we communicate between focus/app pages
