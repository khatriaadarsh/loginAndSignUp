import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome, Let's Get Started</Text>
      <Image source={require('./image.png')} style={styles.img} />
      <View style={styles.btnView}>
        <Pressable
          style={styles.signInBtn}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.signInBtnTxt}>Sign In</Text>
        </Pressable>
        <Pressable
          style={styles.signUpBtn}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpBtnTxt}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  img: {
    width: 200,
    height: 200,
  },
  btnView: {
    paddingTop: '20%',
    gap: 25,
  },
  signInBtn: {
    backgroundColor: 'black',
    paddingHorizontal: '28%',
    paddingVertical: '3%',
    borderRadius: 15,
  },
  signInBtnTxt: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
  signUpBtn: {
    backgroundColor: 'black',
    paddingVertical: '3%',
    borderRadius: 15,
    paddingHorizontal: '28%',
  },
  signUpBtnTxt: {
    color: 'white',
    fontWeight: '600',
    fontSize: 17,
  },
});
