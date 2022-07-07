import React, {useState} from  'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import Button from '../components/Button';


const HomePage = ({navigation}) => {
  
  return (
    <View style={styles.container}>
      
      <Pressable style={[styles.button]} 
                onPress={() => {navigation.navigate('Join')}}>
                  <Text style={styles.text}>Join a bunker</Text>
      </Pressable> 
      <Pressable style={styles.button}
                onPress={() => {navigation.navigate('Create')}}>
                  <Text style={styles.text}>Create a bunker</Text>
                </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // justifyContent: 'space-evenly',
    
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: 'black',
    margin: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

})

export default HomePage;